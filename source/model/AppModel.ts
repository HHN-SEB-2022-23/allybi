import { makeAutoObservable } from "mobx"
import { AppState } from "../types/AppState"
import { inject } from "../lib/globalDI"

/**
 * Main model of the application.
 */
export class AppModel {
    private _state = AppState.MAIN_MENU

    public get stateMachine() {
        return inject("StateMachine")
    }

    public get state() {
        return this._state
    }

    public set state(value) {
        this._state = value
    }

    constructor() {
        makeAutoObservable(this)
    }
}
