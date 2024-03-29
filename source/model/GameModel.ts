import { makeAutoObservable } from "mobx"
import { chapters } from "../data/chapters"
import type { Chapter } from "../types/Chapter"
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry"
import type { Dialog, NPCDialog } from "../types/Dialog"
import { DialogType } from "../types/DialogType"
import { delay, retriggerableDelay } from "@frank-mayer/magic/Timing"
import "@frank-mayer/stream"
import { getDBPromise } from "../lib/DB"

/**
 * Model of the interactive game itself
 */
export class GameModel {
    private readonly _endedChapters = new Set<number>()
    private _chapter: Chapter = {
        title: "not initialized",
        headDialog: {
            dialogType: 0,
            text: "not initialized",
        },
        tags: [],
    }
    private _dialogHistory: Array<DialogHistoryEntry> = []
    private _currentDialog: Dialog | null = this._chapter.headDialog
    private _isFinished = false
    private readonly _db = getDBPromise()
    private _isWorking = true

    private set isWorking(value) {
        if (value) {
            this._isWorking = value
        }
        else {
            retriggerableDelay(() => {
                this._isWorking = value
            }, 1024)
        }
    }

    public get isWorking() {
        return this._isWorking
    }

    public get chapter() {
        return this._chapter
    }

    private set chapter(chapter: Chapter) {
        this._chapter = chapter
    }

    public get dialogHistory(): Array<DialogHistoryEntry> {
        return this._dialogHistory
    }

    private set dialogHistory(history: Array<DialogHistoryEntry>) {
        this._dialogHistory = history
    }

    public get currentDialog(): Readonly<Dialog | null> {
        return this._currentDialog
    }

    private set currentDialog(dialog: Dialog | null) {
        this._currentDialog = dialog
    }

    public get isFinished() {
        this.getAvaliableChaptersAsync()
        return this._isFinished
    }

    private set isFinished(value: boolean) {
        this._isFinished = value
    }

    constructor() {
        makeAutoObservable(this)
    }

    // eslint-disable-next-line max-lines-per-function
    public async continueDialogAsync(nextDialog: Dialog) {
        this.isWorking = true
        this._currentDialog = null
        let dialog: Dialog | undefined = nextDialog

        while (dialog) {
            switch (dialog.dialogType) {
            case DialogType.NPCDialog:
                this.pushDialogHistory({
                    speaker: dialog.speaker,
                    text: dialog.text,
                    emotion: dialog.emotion,
                    isPlayer: false,
                    isNarrator: false,
                })
                break
            case DialogType.NarratorDialog:
                this.pushDialogHistory({
                    speaker: "N/A",
                    text: dialog.text,
                    isPlayer: false,
                    isNarrator: true,
                })
                break
            case DialogType.PlayerDialog:
                this.pushDialogHistory({
                    speaker: "N/A",
                    text: dialog.text,
                    isPlayer: true,
                    isNarrator: false,
                })
                break
            }

            if (dialog && (dialog as NPCDialog).next) {
                dialog = (dialog as NPCDialog).next
                await delay(1024)
            }
            else {
                break
            }
        }

        if (dialog) {
            if (dialog.dialogType === DialogType.PlayerOptionDialog) {
                this.currentDialog = dialog
            }
            else {
                this.currentDialog = {
                    dialogType: DialogType.ChapterEnd,
                }
            }
        }
        else {
            this._currentDialog = {
                dialogType: DialogType.ChapterEnd,
            }
        }

        this.isWorking = false
    }

    public reset() {
        this._endedChapters.clear()
        this.dialogHistory.length = 0
        this.currentDialog = null
    }

    public async getAvaliableChaptersAsync() {
        this.isWorking = true
        const db = await this._db

        const notPlayedChapters = chapters
            .stream()
            .map((_, i) => i)
            .filter((i) => !this._endedChapters.has(i))
            .toArray()

        const avChapters = new Array<number>()

        chapter:
        for (const i of notPlayedChapters) {
            const chapt = chapters[i]
            for (const tag of chapt.tags) {
                const allowed = (await db.get("filter", tag.id.toString(36))) ?? true
                if (!allowed) {
                    continue chapter
                }
            }

            avChapters.push(i)
        }

        this.isFinished = avChapters.length == 0

        this.isWorking = false
        return avChapters
    }

    public async initChapterAsync(): Promise<boolean> {
        const avChapters = await this.getAvaliableChaptersAsync()
        if (avChapters.length === 0) {
            return false
        }

        const i = avChapters[Math.floor(Math.random() * avChapters.length)]
        this.chapter = chapters[i]
        this._endedChapters.add(i)
        this.dialogHistory = []
        this.continueDialogAsync(this._chapter.headDialog)
        return true
    }

    private pushDialogHistory(entry: DialogHistoryEntry) {
        this.dialogHistory = [...this._dialogHistory, entry]
    }
}
