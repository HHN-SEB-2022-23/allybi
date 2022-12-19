import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"

/**
 * View model for the options menu
 *
 * Sets the options in the options model
 */
export class OptionsViewModel {
    private _optionsModel = inject("OptionsModel")

    public constructor() {
        makeAutoObservable(this)
    }
}
