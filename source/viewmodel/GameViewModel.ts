import { modelContainer } from "../model";
import { Dialog } from "../types/Dialog";

export class GameViewModel {
  private _gameModel = modelContainer.resolve("GameModel");

  public get currentDialog(): Dialog {
    return this._gameModel.currentDialog;
  }
}
