import React, { Fragment, useEffect } from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry"
import type { DialogChoice } from "../types/DialogChoice"

const dialogHistoryEntryView = (el: DialogHistoryEntry, index: number) => (
    <Fragment key={index}>
        {el.isPlayer ? (
            <>
                <span />
                <span
                    id={`dialog-text-${index}`}
                    className="dialog-text player-voice"
                >
                    {el.text}
                </span>
                <span className="dialog-speaker player-voice">
                    {el.speaker}
                </span>
            </>
        ) : (
            <>
                <span className="dialog-speaker">{el.speaker}</span>
                <span id={`dialog-text-${index}`} className="dialog-text">
                    {el.text}
                </span>
                <span />
            </>
        )}
    </Fragment>
)

const dialogChoiceView = (choice: DialogChoice, index: number) => (
    <button
        className="dialog-input-choice"
        onClick={choice.onClick}
        key={index}
    >
        {choice.text}
    </button>
)

const smoothScrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "end",
    inline: "nearest",
}

export const GameView = observer(() => {
    const vm = inject("GameViewModel")

    useEffect(() => {
        const latestDialog = document.getElementById(
            `dialog-text-${vm.dialogHistory.length - 1}`
        )

        if (latestDialog) {
            latestDialog.scrollIntoView(smoothScrollOptions)
        }
    })

    return (
        <div className="game-view">
            <h1 className="chapter-title">{vm.sceneTitle}</h1>
            <div className="dialog-history">
                {vm.dialogHistory.map(dialogHistoryEntryView)}
            </div>
            <div className="dialog-input">
                {vm.currentDialog ? (
                    <fieldset>
                        <legend className="dialog-speaker">
                            {vm.currentDialog.speaker}
                        </legend>
                        {vm.currentDialog.choices.map(dialogChoiceView)}
                    </fieldset>
                ) : null}
            </div>
        </div>
    )
})
