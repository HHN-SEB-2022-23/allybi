import { Emotion } from "../components/Avatar"
import type { DialogType } from "./DialogType"

export type NarratorDialog = {
    dialogType: DialogType.NarratorDialog;
    text: string;
    next?: Dialog;
};

export type PlayerDialog = {
    dialogType: DialogType.PlayerDialog;
    text: string;
    next?: Dialog;
};

export type PlayerOptionDialog = {
    dialogType: DialogType.PlayerOptionDialog;
    choices: Array<PlayerDialog>;
};

export type NPCDialog = {
    dialogType: DialogType.NPCDialog;
    speaker: string;
    text: string;
    next?: Dialog;
    emotion?: Emotion;
};

export type ChapterEnd = {
    dialogType: DialogType.ChapterEnd;
};

/**
 * A Dialog is a message that is shown during a chapter.
 */
export type Dialog =
    | NarratorDialog
    | PlayerDialog
    | NPCDialog
    | PlayerOptionDialog
    | ChapterEnd;
