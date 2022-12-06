import { makeAutoObservable } from "mobx";
import { inject } from "../lib/globalDI";
import type { OptionsModel } from "../model/OptionsModel";

export class OptionsViewModel {
  private _optionsModel = inject<OptionsModel>("OptionsModel");

  public constructor() {
    makeAutoObservable(this);
  }
}
