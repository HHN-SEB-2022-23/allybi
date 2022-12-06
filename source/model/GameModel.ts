import { makeAutoObservable } from "mobx";
import { chapters } from "../data/chapters";
import type { Chapter } from "../types/Chapter";
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry";
import type { Dialog } from "../types/Dialog";
import { DialogType } from "../types/DialogType";

export class GameModel {
  private _chapter: Chapter = {
    title: "not initialized",
    player: "not initialized",
    headDialog: {
      dialogType: 0,
      text: "not initialized",
    },
    tags: [],
  };
  private _dialogHistory: Array<DialogHistoryEntry> = [];
  private _currentDialog: Dialog | null = this._chapter.headDialog;

  public get chapter() {
    return this._chapter;
  }

  public get dialogHistory(): ReadonlyArray<DialogHistoryEntry> {
    return this._dialogHistory;
  }

  public get currentDialog(): Readonly<Dialog | null> {
    return this._currentDialog;
  }

  constructor() {
    this.initChapter(chapters[0]);

    makeAutoObservable(this);
  }

  public continueDialog(nextDialog: Dialog) {
    let dialog: Dialog | undefined = nextDialog;

    while (dialog) {
      switch (dialog.dialogType) {
        case DialogType.NPCDialog:
          this._dialogHistory.push({
            speaker: dialog.speaker,
            text: dialog.text,
            isPlayer: false,
          });
          break;
        case DialogType.NarratorDialog:
          this._dialogHistory.push({
            speaker: "Erzähler",
            text: dialog.text,
            isPlayer: false,
          });
          break;
        case DialogType.PlayerDialog:
          this._dialogHistory.push({
            speaker: this._chapter.player,
            text: dialog.text,
            isPlayer: true,
          });
          break;
      }

      if ("next" in dialog) {
        dialog = dialog.next;
      } else {
        break;
      }
    }

    this._currentDialog = dialog || null;
  }

  public initChapter(chapter: Chapter) {
    this._chapter = chapter;
    this._dialogHistory.length = 0;
    this.continueDialog(chapter.headDialog);
  }
}
