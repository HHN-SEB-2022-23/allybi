import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"

/**
 * View model for the app
 *
 * Changes the state of the app (which view is currently active)
 */
export class AppViewModel {
    private readonly _appModel = inject("AppModel")

    public get state() {
        return this._appModel.state
    }

    constructor() {
        makeAutoObservable(this)
    }
}
