import { makeAutoObservable } from "mobx"
import { getDBPromise } from "../lib/DB"
import type { DBType, OptionsDBType } from "../lib/DB"
import type { IDBPDatabase } from "idb"

/**
 * Model for the options (not only the options menu)
 */
export class OptionsModel {
    private _db: Promise<IDBPDatabase<DBType>>

    public async getReducedMotionAsync(): Promise<boolean | undefined> {
        return await this.getSettingAsync("reduced-motion")
    }

    public async setReducedMotionAsync(value: OptionsDBType["reduced-motion"]): Promise<boolean> {
        return await this.setSettingAsync("reduced-motion", value)
    }

    public async getDarkModeAsync() {
        return await this.getSettingAsync("dark-mode")
    }

    public async setDarkModeAsync(value: OptionsDBType["dark-mode"]) {
        return await this.setSettingAsync("dark-mode", value)
    }

    public async getContrastAsync() {
        return await this.getSettingAsync("contrast")
    }

    public async setContrastAsync(value: OptionsDBType["contrast"]) {
        return await this.setSettingAsync("contrast", value)
    }

    constructor() {
        this._db = getDBPromise()
        makeAutoObservable(this)
    }

    private async getSettingAsync<K extends keyof OptionsDBType>(
        option: K
    ): Promise<OptionsDBType[K]> {
        const db = await this._db
        return await db.get("options", option)
    }

    private async setSettingAsync<
        K extends keyof OptionsDBType,
        T extends OptionsDBType[K]
    >(option: K, value: T): Promise<T> {
        const db = await this._db
        await db.put("options", value, option)
        return value
    }
}
