import type { Tag } from "./Tags"

type FilterEntry = {
    display: string,
    tag: Tag,
    active: boolean
}

export type FilterHook = Array<FilterEntry>
