import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"
import { MouseEventHandler } from "react"

/**
 * View model for the options menu
 *
 * Sets the options in the options model
 */
export class QAViewModel {
    private readonly _appModel = inject("AppModel")

    public constructor() {
        makeAutoObservable(this)
    }

    public readonly onClickBack: MouseEventHandler<Element> = () => {
        this._appModel.stateMachine.send({ type:"BACK" })
    }
}
