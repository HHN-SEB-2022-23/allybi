import { makeAutoObservable } from "mobx";
import type { Chapter } from "../types/Chapter";

export class GameModel {
  private _currectChapter: Chapter;
  private readonly _recentChapters: Set<Chapter>;
  private _dialogIndex: number;

  public get currentDialog() {
    return this._currectChapter.dialoges[this._dialogIndex];
  }

  constructor() {
    makeAutoObservable(this);
  }
}
