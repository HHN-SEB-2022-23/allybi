import type { Emotion } from "../components/Avatar"

/**
 * A single entry in the dialog history.
 * This is used instead of the whole `Dialog` Object,
 * because it is not needed.
 */
export type DialogHistoryEntry = {
    emotion?: Emotion;
    speaker: string;
    isPlayer: boolean;
    isNarrator: boolean;
    text: string;
}
