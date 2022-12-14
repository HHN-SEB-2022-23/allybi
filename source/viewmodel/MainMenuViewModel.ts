import { makeAutoObservable } from "mobx"
import type { MouseEventHandler } from "react"
import { inject } from "../lib/globalDI"

/**
 * View model for the main menu
 *
 * Uses game and app models to start a new game
 */
export class MainMenuViewModel {
    private _mainMenuModel = inject("MainMenuModel")
    private _gameModel = inject("GameModel")
    private _appModel = inject("AppModel")

    public readonly startGame: MouseEventHandler<Element> = () => {
        this._appModel.startGame()
        this._gameModel.reset()
        this._gameModel.initChapter()
    }

    public readonly openOptions: MouseEventHandler<Element> = () => {
        this._appModel.openOptions()
    }

    constructor() {
        makeAutoObservable(this)
    }
}
