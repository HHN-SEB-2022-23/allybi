import { makeAutoObservable } from "mobx";
import { inject } from "../lib/globalDI";
import type { AppModel } from "../model/AppModel";

export class AppViewModel {
  private _appModel = inject<AppModel>("AppModel");

  public get state() {
    return this._appModel.state;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
