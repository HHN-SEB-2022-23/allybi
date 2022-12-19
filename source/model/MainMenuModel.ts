import { makeAutoObservable } from "mobx"

/**
 * Model for the main menu
 */
export class MainMenuModel {
    constructor() {
        makeAutoObservable(this)
    }
}
