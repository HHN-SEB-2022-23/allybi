import type { DialogType } from "./DialogType"

type NarratorDialog = {
    dialogType: DialogType.NarratorDialog;
    text: string;
    next?: Dialog;
};

type PlayerDialog = {
    dialogType: DialogType.PlayerDialog;
    text: string;
    next?: Dialog;
};

type PlayerOptionDialog = {
    dialogType: DialogType.PlayerOptionDialog;
    choices: Array<PlayerDialog>;
};

type NPCDialog = {
    dialogType: DialogType.NPCDialog;
    speaker: string;
    text: string;
    next?: Dialog;
};

type ChapterEnd = {
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
