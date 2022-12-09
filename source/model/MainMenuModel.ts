import { makeAutoObservable } from "mobx"

export class MainMenuModel {
    constructor() {
        makeAutoObservable(this)
    }
}
