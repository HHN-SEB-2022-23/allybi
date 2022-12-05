import React from "react";
import { observer } from "mobx-react";
import { AppState } from "../types/AppState";
import { viewModelContainer } from "../viewmodel";
import { MainMenuView } from "./MainMenuView";
import { GameView } from "./GameView";
import { OptionsView } from "./OptionsView";

export const AppView = observer(() => {
  const vm = viewModelContainer.resolve("AppViewModel");

  switch (vm.state) {
    case AppState.MAIN_MENU:
      return <MainMenuView />;

    case AppState.IN_GAME:
      return <GameView />;

    case AppState.OPTIONS:
      return <OptionsView />;

    default:
      return <div>Unknown state {vm.state}</div>;
  }
});
