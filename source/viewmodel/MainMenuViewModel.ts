import { modelContainer } from "../model";
import type { AppModel } from "../model/AppModel";
import type { MainMenuModel } from "../model/MainMenuModel";
import type { MouseEventHandler } from "react";

export class MainMenuViewModel {
  private _mainMenuModel: MainMenuModel;
  private _appModel: AppModel;

  public constructor() {
    this._mainMenuModel = modelContainer.resolve("MainMenuModel");
    this._appModel = modelContainer.resolve("AppModel");
  }

  public readonly startGame: MouseEventHandler<Element> = () => {
    this._appModel.startGame();
  };

  public readonly openOptions: MouseEventHandler<Element> = () => {
    this._appModel.openOptions();
  };
}
