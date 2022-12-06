import React from "react";
import { observer } from "mobx-react";
import { inject } from "../lib/globalDI";
import type { GameViewModel } from "../viewmodel/GameViewModel";

export const GameView = observer(() => {
  const vm = inject<GameViewModel>("GameViewModel");

  return (
    <>
      <h1 className="chapter-title">{vm.sceneTitle}</h1>
      <ul className="dialog-history">
        {vm.dialogHistory.map((el, index) => (
          <li key={index}>
            <span className="dialog-speaker">{el.speaker}:</span>
            <span className="dialog-text">{el.text}</span>
          </li>
        ))}
      </ul>
      <div>
        {vm.currentDialog ? (
          <>
            <span>{vm.currentDialog.speaker}</span>
            {vm.currentDialog.choices.map((choice, index) => (
              <button onClick={choice.onClick} key={index}>
                {choice.text}
              </button>
            ))}
          </>
        ) : (
          "Ende"
        )}
      </div>
    </>
  );
});
