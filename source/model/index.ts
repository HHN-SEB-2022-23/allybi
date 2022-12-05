import { DIContainer } from "@frank-mayer/dilight";
import { AppModel } from "./AppModel";
import { GameModel } from "./GameModel";
import { MainMenuModel } from "./MainMenuModel";
import { OptionsModel } from "./OptionsModel";

export const modelContainer = new DIContainer()
  .addSingleton(AppModel, "AppModel")
  .addSingleton(GameModel, "GameModel")
  .addSingleton(MainMenuModel, "MainMenuModel")
  .addSingleton(OptionsModel, "OptionsModel");
