import { modelContainer } from "../model";

export class AppViewModel {
  private _appModel = modelContainer.resolve("AppModel");

  public get state() {
    return this._appModel.state;
  }
}
