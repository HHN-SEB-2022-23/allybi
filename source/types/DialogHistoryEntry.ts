/**
 * A single entry in the dialog history.
 * This is used instead of the whole `Dialog` Object,
 * because it is not needed.
 */
export type DialogHistoryEntry = {
    speaker: string;
    isPlayer: boolean;
    text: string;
}
