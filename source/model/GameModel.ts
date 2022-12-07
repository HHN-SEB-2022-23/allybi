import { makeAutoObservable } from "mobx";
import { chapters } from "../data/chapters";
import type { Chapter } from "../types/Chapter";
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry";
import type { Dialog } from "../types/Dialog";
import { DialogType } from "../types/DialogType";

export class GameModel {
  private readonly _endedChapters = new Set<number>();
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

  public get isFinished() {
    return this._endedChapters.size >= chapters.length;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public async continueDialog(nextDialog: Dialog) {
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
        await new Promise((resp) => {
          setTimeout(resp, 500);
        });
      } else {
        break;
      }
    }

    this._currentDialog = dialog || null;
  }

  public reset() {
    this._endedChapters.clear();
    this._dialogHistory.length = 0;
    this._currentDialog = null;
  }

  public initChapter(): boolean {
    const avChapters = chapters
      .map((_, i) => i)
      .filter((i) => !this._endedChapters.has(i));

    if (avChapters.length === 0) {
      return false;
    }

    const i = avChapters[Math.floor(Math.random() * avChapters.length)];
    this._chapter = chapters[i];
    this._endedChapters.add(i);
    this._dialogHistory.length = 0;
    this.continueDialog(this._chapter.headDialog);
    return true;
  }
}
