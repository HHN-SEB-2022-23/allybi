import React from "react"
import { observer } from "mobx-react"
import { AppState } from "../types/AppState"
import { MainMenuView } from "./MainMenuView"
import { GameView } from "./GameView"
import { OptionsView } from "./OptionsView"
import { inject } from "../lib/globalDI"
import { QAView } from "./QAView"
import { FilterView } from "./FilterView"

/**
 * The main view of the application.
 *
 * This view is responsible for rendering the correct view
 * based on the app state.
 */
export const AppView = observer(() => {
    const _appViewModel = inject("AppViewModel")

    switch (_appViewModel.state) {
    case AppState.MAIN_MENU:
        return <MainMenuView />

    case AppState.IN_GAME:
        return <GameView />

    case AppState.OPTIONS:
        return <OptionsView />

    case AppState.QA:
        return <QAView />

    case AppState.FILTER:
        return <FilterView />

    default:
        return <div>Unknown state {_appViewModel.state}</div>
    }
})
