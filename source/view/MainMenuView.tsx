import React from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"

/**
 * The main menu view.
 *
 * This view is responsible for rendering the main menu.
 */
export const MainMenuView = observer(() => {
    const _mainMenuViewModel = inject("MainMenuViewModel")

    return (
        <nav className="menu">
            <h1 className="menu-menu__title">
                Allybi <span className="menu__subtitle">vom Alibi zum Ally</span>
            </h1>

            <button className="menu__item" onClick={_mainMenuViewModel.startGame}>
                Spiel Starten
            </button>

            <button className="menu__item" onClick={_mainMenuViewModel.openOptions}>
                Optionen
            </button>
        </nav>
    )
})
