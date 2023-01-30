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
        <nav className="menu--centered">
            <h1 className="menu__title">
                Allybi <span className="menu__subtitle">vom Alibi zum Ally</span>
            </h1>

            <div>
                <p>Hi,</p>
                <p>schön, dass du da bist !</p>
                <p>Dieses Spiel ist ein textbasiertes Adventuregame, in dem du verschiedene Szenarien aus dem Alltag
                 von diskriminierten Personen miterleben kannst.</p>
                <p>Wähle einfach "Spiel starten" aus und entscheide, welche zufällig gewählten Stories
                 du durchspielen möchtest.</p>
                <p>Dieses Spiel ist in Zusammenarbeit mit der adi.hn entstanden.</p>
                <p>Altersempfehlung: 18+</p>
            </div>

            <button className="menu__item" onClick={_mainMenuViewModel.startGame}>
                Spiel Starten
            </button>

            <button className="menu__item" onClick={_mainMenuViewModel.openOptions}>
                Optionen
            </button>

            <button className="menu__item" onClick={_mainMenuViewModel.openQA}>
                Q & A
            </button>

            <button className="menu__item" onClick={_mainMenuViewModel.openCredits}>
                Credits
            </button>
        </nav>
    )
})
