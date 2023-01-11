import React, { Fragment, useEffect } from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"
import { Avatar } from "../components/Avatar"
import type { DialogHistoryEntry } from "../types/DialogHistoryEntry"
import type { DialogChoice } from "../types/DialogChoice"

/**
 * The game view.
 *
 * This view is responsible for rendering the interactive game.
 */
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
        <div className="game">
            <h1 className="game__chapter-title">{vm.sceneTitle}</h1>
            <div className="game__dialog-history dialog-history">
                {vm.dialogHistory.map(dialogHistoryEntryView)}
            </div>
            <div className="game__dialog-input">
                {vm.currentDialog ? (
                    <fieldset className="dialog-input">
                        <legend className="game__dialog-speaker">
                            {vm.currentDialog.speaker}
                        </legend>
                        {vm.currentDialog.choices.map(dialogChoiceView)}
                    </fieldset>
                ) : null}
            </div>
        </div>
    )
})

/**
 * Renders one dialog choice.
 *
 * Used for a map function of `Array<DialogChoice>`.
 */
const dialogChoiceView = (choice: DialogChoice, index: number) => (
    <button
        className="dialog-input__choice"
        onClick={choice.onClick}
        key={index}
    >
        {choice.text}
    </button>
)

/**
 * Renders a dialog history entry.
 *
 * Used for a map function of `Array<DialogHistoryEntry>`.
 */
const dialogHistoryEntryView = (el: DialogHistoryEntry, index: number) => (
    <Fragment key={index}>
        {el.isPlayer ? (
            <>
                <span />
                <span
                    id={`dialog-text-${index}`}
                    className="dialog-history__text dialog-history__text--player-voice"
                >
                    {el.text}
                </span>
                <span className="game__dialog-speaker dialog-history__speaker--player-voice">
                    {el.speaker}
                </span>
            </>
        ) : (
            <>
                <span className="dialog-history__speaker">
                    <Avatar className="dialog-history__speaker--image" seed={el.speaker} />
                    <span className="game__dialog-speaker">{el.speaker}</span>
                </span>
                <span id={`dialog-text-${index}`} className="dialog-history__text dialog-history__text--npc-voice">
                    {el.text}
                </span>
                <span />
            </>
        )}
    </Fragment>
)

/**
 * Scroll settings for smooth scrolling.
 * This is used to scroll the dialog history to the latest entry.
 */
const smoothScrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "end",
    inline: "nearest",
}
