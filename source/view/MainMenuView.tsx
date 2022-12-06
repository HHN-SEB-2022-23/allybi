import React from "react";
import { observer } from "mobx-react";
import { viewModelContainer } from "../viewmodel";

export const MainMenuView = observer(() => {
  const vm = viewModelContainer.resolve("MainMenuViewModel");

  return (
    <nav className="main-menu">
      <h1 className="menu-title">{document.title}</h1>

      <button className="menu-item" onClick={vm.startGame}>
        Spiel Starten
      </button>

      <button className="menu-item" onClick={vm.openOptions}>
        Optionen
      </button>
    </nav>
  );
});
