import { makeAutoObservable } from "mobx"
import { chapters } from "../data/chapters"
import type { Chapter } from "../types/Chapter"
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry"
import type { Dialog } from "../types/Dialog"
import { DialogType } from "../types/DialogType"
import { delay } from "@frank-mayer/magic/Timing"

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
        return this._endedChapters.size >= chapters.length
    }

    constructor() {
        makeAutoObservable(this)
    }

    // eslint-disable-next-line max-lines-per-function
    public async continueDialogAsync(nextDialog: Dialog) {
        this._currentDialog = null
        let dialog: Dialog | undefined = nextDialog

        while (dialog) {
            switch (dialog.dialogType) {
            case DialogType.NPCDialog:
                this.pushDialogHistory({
                    speaker: dialog.speaker,
                    text: dialog.text,
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

            if ("next" in dialog) {
                dialog = dialog.next
                await delay(2000)
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
    }

    public reset() {
        this._endedChapters.clear()
        this.dialogHistory.length = 0
        this.currentDialog = null
    }

    public initChapter(): boolean {
        const avChapters = chapters
            .map((_, i) => i)
            .filter((i) => !this._endedChapters.has(i))

        if (avChapters.length === 0) {
            return false
        }

        const i = avChapters[Math.floor(Math.random() * avChapters.length)]
        this.chapter = chapters[i]
        this._endedChapters.add(i)
        this.dialogHistory.length = 0
        this.continueDialogAsync(this._chapter.headDialog)
        return true
    }

    private pushDialogHistory(entry: DialogHistoryEntry) {
        this._dialogHistory.push(entry)
    }
}
