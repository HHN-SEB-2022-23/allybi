import React, { Fragment } from "react";
import { observer } from "mobx-react";
import { inject } from "../lib/globalDI";
import type { GameViewModel } from "../viewmodel/GameViewModel";

export const GameView = observer(() => {
  const vm = inject<GameViewModel>("GameViewModel");

  return (
    <>
      <h1 className="chapter-title">{vm.sceneTitle}</h1>
      <div className="dialog-history">
        {vm.dialogHistory.map((el, index) => (
          <Fragment key={index}>
            {el.isPlayer ? (
              <>
                <span />
                <span className="dialog-text player-voice">{el.text}</span>
                <span className="dialog-speaker player-voice">
                  {el.speaker}
                </span>
              </>
            ) : (
              <>
                <span className="dialog-speaker">{el.speaker}</span>
                <span className="dialog-text">{el.text}</span>
                <span />
              </>
            )}
          </Fragment>
        ))}
      </div>
      <div className="dialog-input">
        {vm.currentDialog ? (
          <>
            <span className="dialog-speaker">{vm.currentDialog.speaker}</span>
            {vm.currentDialog.choices.map((choice, index) => (
              <button
                className="dialog-input-choice"
                onClick={choice.onClick}
                key={index}
              >
                {choice.text}
              </button>
            ))}
          </>
        ) : (
          <>
            <h2 className="dialog-speaker">Ende</h2>
            {!vm.isFinished && (
              <button className="dialog-input-choice" onClick={vm.nextChapter}>
                Nächstes Kapitel
              </button>
            )}
            <button className="dialog-input-choice" onClick={vm.mainMenu}>
              Zum Hauptmenü
            </button>
          </>
        )}
      </div>
    </>
  );
});
