import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"

export class AppViewModel {
    private _appModel = inject("AppModel")

    public get state() {
        return this._appModel.state
    }

    constructor() {
        makeAutoObservable(this)
    }
}
