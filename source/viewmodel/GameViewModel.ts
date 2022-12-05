import { modelContainer } from "../model";

export class GameViewModel {
  private _gameModel = modelContainer.resolve("GameModel");
}
