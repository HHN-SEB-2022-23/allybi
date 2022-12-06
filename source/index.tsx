import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { AppView } from "./view/AppView";
import { globalDI } from "./lib/globalDI";

import { AppModel } from "./model/AppModel";
import { GameModel } from "./model/GameModel";
import { MainMenuModel } from "./model/MainMenuModel";
import { OptionsModel } from "./model/OptionsModel";

import { AppViewModel } from "./viewmodel/AppViewModel";
import { GameViewModel } from "./viewmodel/GameViewModel";
import { MainMenuViewModel } from "./viewmodel/MainMenuViewModel";
import { OptionsViewModel } from "./viewmodel/OptionsViewModel";

globalDI()
  // model
  .addSingleton(AppModel, "AppModel")
  .addSingleton(GameModel, "GameModel")
  .addSingleton(MainMenuModel, "MainMenuModel")
  .addSingleton(OptionsModel, "OptionsModel")
  // viewmodel
  .addSingleton(AppViewModel, "AppViewModel")
  .addSingleton(MainMenuViewModel, "MainMenuViewModel")
  .addSingleton(GameViewModel, "GameViewModel")
  .addSingleton(OptionsViewModel, "OptionsViewModel");

const appEl = document.getElementById("app");

if (appEl) {
  (globalThis as unknown as { reactRoot: Root }).reactRoot = createRoot(appEl);

  (globalThis as unknown as { reactRoot: Root }).reactRoot.render(
    <React.StrictMode>
      <AppView />
    </React.StrictMode>
  );
}
