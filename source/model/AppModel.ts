import { makeAutoObservable } from "mobx"
import { AppState } from "../types/AppState"

/**
 * Main model of the application.
 */
export class AppModel {
    private _state: AppState = AppState.MAIN_MENU
    private _prevState: AppState | null = AppState.MAIN_MENU

    public get state() {
        return this._state
    }

    private set state(state: AppState) {
        this._prevState = this._state
        this._state = state
    }

    public get prevState() {
        return this._prevState
    }

    constructor() {
        makeAutoObservable(this)
    }

    startGame() {
        this.state = AppState.IN_GAME
    }

    openOptions() {
        this.state = AppState.OPTIONS
    }

    openQA() {
        this.state = AppState.QA
    }

    openMainMenu() {
        this.state = AppState.MAIN_MENU
    }

    navigateBack() {
        if (this._prevState !== null) {
            this._state = this._prevState
            this._prevState = null
            return true
        }

        return false
    }
}
