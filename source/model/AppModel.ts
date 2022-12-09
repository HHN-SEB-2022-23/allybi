import { makeAutoObservable } from "mobx"
import { AppState } from "../types/AppState"

export class AppModel {
    private _state: AppState = AppState.MAIN_MENU

    public get state() {
        return this._state
    }
    public set state(state: AppState) {
        this._state = state
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

    openMainMenu() {
        this.state = AppState.MAIN_MENU
    }
}
