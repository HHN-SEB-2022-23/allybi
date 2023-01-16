/* eslint-disable no-console */
import { openDB } from "idb"
import type { IDBPDatabase } from "idb"

export type OptionsDBType = {
    "reduced-motion": boolean
    "dark-mode": boolean
    contrast: "more" | "less" | "normal"
}

export type DBType = {
    options: OptionsDBType
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createIfNotExistent = (database: IDBPDatabase<any>, name: string) => {
    if (!database.objectStoreNames.contains(name)) {
        database.createObjectStore(name, {})
    }
}

const _dbProm: Promise<IDBPDatabase<DBType>> = openDB<DBType>("allybi", 2, {
    upgrade(database) {
        createIfNotExistent(database, "options")
        createIfNotExistent(database, "filter")
    },
    blocked() {
        console.error("Database blocked")
    },
    blocking() {
        console.error("Database blocking")
    },
    terminated() {
        console.error("Database terminated")
    }
})

export const getDBPromise = () => _dbProm
