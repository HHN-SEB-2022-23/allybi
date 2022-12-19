import React from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"

/**
 * The main menu view.
 *
 * This view is responsible for rendering the main menu.
 */
export const MainMenuView = observer(() => {
    const vm = inject("MainMenuViewModel")

    return (
        <nav className="main-menu">
            <h1 className="menu-title">
                Allybi <span className="menu-subtitle">vom Alibi zum Ally</span>
            </h1>

            <button className="menu-item" onClick={vm.startGame}>
                Spiel Starten
            </button>

            <button className="menu-item" onClick={vm.openOptions}>
                Optionen
            </button>
        </nav>
    )
})
