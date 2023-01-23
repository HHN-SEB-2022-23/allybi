import React from "react"
import { createRoot } from "react-dom/client"
import { AppView } from "./view/AppView"

// initialize the react root
const appEl = document.getElementById("app")

if (appEl) {
    globalThis.reactRoot = createRoot(appEl)

    globalThis.reactRoot.render(
        <React.StrictMode>
            <AppView />
        </React.StrictMode>
    )
}
