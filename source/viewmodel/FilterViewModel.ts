import { IDBPDatabase } from "idb"
import { makeAutoObservable } from "mobx"
import { getDBPromise } from "../lib/DB"
import type { DBType } from "../lib/DB"
import type { MouseEventHandler } from "react"
import type { FilterHook } from "../types/FilterHook"
import { inject } from "../lib/globalDI"

export class FilterViewModel {
    private readonly _appModel = inject("AppModel")
    private readonly _db: Promise<IDBPDatabase<DBType>>

    onClickBack: MouseEventHandler<HTMLButtonElement> = () => {
        this._appModel.navigateBack()
    }

    constructor() {
        this._db = getDBPromise()
        makeAutoObservable(this)
    }

    async useFilterAsync(): Promise<FilterHook> {
        throw new Error("Method not implemented.")
    }
}
