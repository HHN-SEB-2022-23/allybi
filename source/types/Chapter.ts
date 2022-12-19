import type { Dialog } from "./Dialog"
import type { Tag } from "./Tags"

/**
 * A chapter is a collection of dialogs that are played.
 *
 * One `Dialog` is the head, like in a linked list.
 * From this head, the player might choose one dialog if there are multiple.
 */
export interface Chapter {
    get title(): string;
    get player(): string;
    get tags(): Array<Tag>;
    get headDialog(): Dialog;
}
