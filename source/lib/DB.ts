/* eslint-disable no-console */
import { openDB } from "idb"

export type OptionsDBType = {
    "reduced-motion": boolean
    "dark-mode": boolean
    contrast: "more" | "less" | "normal"
}

export type DBType = {
    options: OptionsDBType
}

export const makeDb = () => openDB<DBType>("allybi", 1, {
    upgrade(database) {
        database.createObjectStore("options", {})
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
