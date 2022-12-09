import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"

export class OptionsViewModel {
    private _optionsModel = inject("OptionsModel")

    public constructor() {
        makeAutoObservable(this)
    }
}
