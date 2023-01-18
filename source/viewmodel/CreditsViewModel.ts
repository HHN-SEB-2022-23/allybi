import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"
import { MouseEventHandler } from "react"

/**
 * View model for the credits menu
 */

export class CreditsViewModel {
    private readonly _appModel = inject("AppModel")

    public constructor() {
        makeAutoObservable(this)
    }

    public readonly onClickBack: MouseEventHandler<Element> = () => {
        this._appModel.stateMachine.send({ type:"BACK" })
    }
}
