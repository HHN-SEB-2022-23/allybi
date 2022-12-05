import { DIContainer } from "@frank-mayer/dilight";
import { AppViewModel } from "./AppViewModel";
import { MainMenuViewModel } from "./MainMenuViewModel";
import { GameViewModel } from "./GameViewModel";
import { OptionsViewModel } from "./OptionsViewModel";

export const viewModelContainer = new DIContainer()
  .addSingleton(AppViewModel, "AppViewModel")
  .addSingleton(MainMenuViewModel, "MainMenuViewModel")
  .addSingleton(GameViewModel, "GameViewModel")
  .addSingleton(OptionsViewModel, "OptionsViewModel");
