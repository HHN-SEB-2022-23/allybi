import { DialogType } from "../types/DialogType";
import { inject } from "../lib/globalDI";
import type { GameModel } from "../model/GameModel";
import { makeAutoObservable } from "mobx";

export class GameViewModel {
  private _gameModel = inject<GameModel>("GameModel");

  public get dialogHistory() {
    return this._gameModel.dialogHistory;
  }

  public get sceneTitle() {
    return this._gameModel.chapter.title;
  }

  public get currentDialog() {
    if (
      this._gameModel.currentDialog &&
      this._gameModel.currentDialog.dialogType === DialogType.PlayerOptionDialog
    ) {
      return {
        speaker: this._gameModel.chapter.player,
        choices: this._gameModel.currentDialog.choices.map((choice) => ({
          text: choice.text,
          onClick: () => this._gameModel.continueDialog(choice),
        })),
      };
    } else {
      return null;
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}
