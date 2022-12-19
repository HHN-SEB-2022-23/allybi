import { makeAutoObservable } from "mobx"

/**
 * Model for the options (not only the options menu)
 */
export class OptionsModel {
    constructor() {
        makeAutoObservable(this)
    }
}
