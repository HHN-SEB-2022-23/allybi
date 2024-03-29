import { DialogType } from "../types/DialogType"
import type { DialogChoice } from "../types/DialogChoice"
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry"
import { inject } from "../lib/globalDI"
import { makeAutoObservable } from "mobx"

/**
 * View model for the interactive game
 *
 * Contains the core logic for the game itself
 */
export class GameViewModel {
    private readonly _gameModel = inject("GameModel")
    private readonly _appModel = inject("AppModel")

    public get isWorking() {
        return this._gameModel.isWorking
    }

    public readonly nextChapter = () => {
        if (this.isWorking) {
            return
        }

        this._gameModel.initChapterAsync()
            .then(() => {
                this._gameModel.getAvaliableChaptersAsync()
            })
    }

    public readonly mainMenu = () => {
        this._appModel.stateMachine.send({ type:"BACK" })
    }

    public readonly openOptions = () => {
        this._appModel.stateMachine.send({ type:"OPTIONS" })
    }

    public get dialogHistory(): ReadonlyArray<DialogHistoryEntry> {
        return this._gameModel.dialogHistory
    }

    public get sceneTitle() {
        return this._gameModel.chapter.title
    }

    private chapterEndInput(): {speaker: string, choices: Array<DialogChoice>} {
        this._gameModel.getAvaliableChaptersAsync()

        const d = {
            speaker: "Kapitel abgeschlossen",
            choices: [
                {
                    text: "Zurück zum Hauptmenü",
                    onClick: this.mainMenu,
                },
            ],
        }

        if (!this.isFinished) {
            d.choices.push({
                text: "Nächstes Kapitel spielen",
                onClick: this.nextChapter,
            })
        }

        return d
    }

    public get currentDialog() {
        if (this._gameModel.currentDialog) {
            switch (this._gameModel.currentDialog.dialogType) {
            case DialogType.PlayerOptionDialog:
                return {
                    speaker: "N/A",
                    choices: this._gameModel.currentDialog.choices.map(
                        (choice) => ({
                            text: choice.text,
                            onClick: () =>
                                this._gameModel.continueDialogAsync(choice),
                        })
                    ),
                }

            case DialogType.ChapterEnd:
                return this.chapterEndInput()
            }
        }

        return null
    }

    public get isFinished() {
        return this._gameModel.isFinished
    }

    constructor() {
        makeAutoObservable(this)
    }
}
