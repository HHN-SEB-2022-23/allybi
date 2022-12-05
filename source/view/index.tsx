import React from "react";
import { createRoot } from "react-dom/client";
import { AppView } from "./AppView";

const appEl = document.getElementById("app");

if (appEl) {
  (globalThis as any).reactRoot = createRoot(appEl);

  (globalThis as any).reactRoot.render(
    <React.StrictMode>
      <AppView />
    </React.StrictMode>
  );
}
