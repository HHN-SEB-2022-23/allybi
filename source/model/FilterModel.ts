import { makeAutoObservable } from "mobx"
import { getDBPromise } from "../lib/DB"
import type { DBType } from "../lib/DB"
import type { IDBPDatabase } from "idb"

/**
 * Model for the options (not only the options menu)
 */
export class FilterModel {
    private _db: Promise<IDBPDatabase<DBType>>

    constructor() {
        this._db = getDBPromise()
        makeAutoObservable(this)
    }

    public async getFilterAsync(tag: number): Promise<boolean> {
        const db = await this._db
        return await db.get("filter", tag.toString(36))
    }

    public async setFilterAsync(tag: number, value: boolean): Promise<boolean> {
        const db = await this._db
        await db.put("filter", value, tag.toString(36))
        return value
    }
}
