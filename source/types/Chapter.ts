import type { Dialog } from "./Dialog"
import type { Tag } from "./Tags"

export interface Chapter {
    get title(): string;
    get player(): string;
    get tags(): Array<Tag>;
    get headDialog(): Dialog;
}
