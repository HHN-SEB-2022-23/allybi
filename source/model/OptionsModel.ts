import { makeAutoObservable } from "mobx";

export class OptionsModel {
  constructor() {
    makeAutoObservable(this);
  }
}
