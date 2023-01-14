import React from "react"
import { createRoot } from "react-dom/client"
import { AppView } from "./view/AppView"
import { onServiceWorkerCacheUpdated } from "@frank-mayer/service-worker/client"
import { inject } from "./lib/globalDI"
import { AppState } from "./types/AppState"

onServiceWorkerCacheUpdated(() => {
    const appModel = inject("AppModel")
    if (appModel.state === AppState.MAIN_MENU) {
        location.reload()
        return
    }

    // eslint-disable-next-line no-alert
    const doReload = confirm([
        "Für diese App ist ein Update verfügbar.",
        "Soll die App jetzt neu gestartet werden, um diese Änderung zu laden?"
    ].join("\n"))

    if (doReload) {
        location.reload()
    }
})

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
