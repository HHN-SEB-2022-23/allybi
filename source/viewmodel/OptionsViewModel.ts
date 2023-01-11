import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"

/**
 * View model for the options menu
 *
 * Sets the options in the options model
 */
export class OptionsViewModel {
    //private readonly _optionsModel = inject("OptionsModel")
    private readonly _appModel = inject("AppModel")

    public constructor() {
        makeAutoObservable(this)
    }

    public readonly onClickBack = () => {
        this._appModel.openMainMenu()
    }
}
