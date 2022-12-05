import { makeAutoObservable } from "mobx";

export class GameModel {
  constructor() {
    makeAutoObservable(this);
  }
}
