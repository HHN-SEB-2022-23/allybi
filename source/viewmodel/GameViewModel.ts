import { DialogType } from "../types/DialogType"
import type { DialogChoice } from "../types/DialogChoice"
import { inject } from "../lib/globalDI"
import { makeAutoObservable } from "mobx"

export class GameViewModel {
    private _gameModel = inject("GameModel")
    private _appModel = inject("AppModel")

    public readonly nextChapter = () => {
        this._gameModel.initChapter()
    }

    public readonly mainMenu = () => {
        this._appModel.openMainMenu()
    }

    public get dialogHistory() {
        return this._gameModel.dialogHistory
    }

    public get sceneTitle() {
        return this._gameModel.chapter.title
    }

    private chapterEndInput(): {speaker: string, choices: Array<DialogChoice>} {
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
                    speaker: this._gameModel.chapter.player,
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
