import { makeAutoObservable } from "mobx";
import type { MouseEventHandler } from "react";
import { inject } from "../lib/globalDI";
import type { AppModel } from "../model/AppModel";
import type { GameModel } from "../model/GameModel";
import type { MainMenuModel } from "../model/MainMenuModel";

export class MainMenuViewModel {
  private _mainMenuModel = inject<MainMenuModel>("MainMenuModel");
  private _gameModel = inject<GameModel>("GameModel");
  private _appModel = inject<AppModel>("AppModel");

  public readonly startGame: MouseEventHandler<Element> = () => {
    this._appModel.startGame();
    this._gameModel.reset();
    this._gameModel.initChapter();
  };

  public readonly openOptions: MouseEventHandler<Element> = () => {
    this._appModel.openOptions();
  };

  public readonly quit: MouseEventHandler<Element> = () => {
    window.close();
  };

  constructor() {
    makeAutoObservable(this);
  }
}
