import { modelContainer } from "../model";
import type { OptionsModel } from "../model/OptionsModel";

export class OptionsViewModel {
  private _optionsModel: OptionsModel;

  public constructor() {
    this._optionsModel = modelContainer.resolve("OptionsModel");
  }
}
