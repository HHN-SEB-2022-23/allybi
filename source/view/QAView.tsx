import React from "react"
import { observer } from "mobx-react"

/**
 * The main menu view.
 *
 * This view is responsible for rendering the main menu.
 */
export const QAView = observer(() => {
    return (
        <div className="menu">
            <h1 className="menu__title">Q&A</h1>
        </div>
    )
})
