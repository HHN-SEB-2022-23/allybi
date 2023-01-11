import React from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"

/**
 * The options view.
 *
 * This view is responsible for rendering the options menu.
 */
export const OptionsView = observer(() => {
    const vm = inject("OptionsViewModel")

    return <nav className="menu">
        <h1 className="menu__title">Optionen</h1>
        <button onClick={vm.onClickBack} className="menu__item">Zurück</button>
    </nav>
})
