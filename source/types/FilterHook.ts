import type { Tag } from "./Tags"

export type FilterEntry = {
    tag: Tag,
    active: boolean
}

export type FilterHook = Array<FilterEntry>
