import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { AppView } from "./AppView";

const appEl = document.getElementById("app");

if (appEl) {
  (globalThis as unknown as { reactRoot: Root }).reactRoot = createRoot(appEl);

  (globalThis as unknown as { reactRoot: Root }).reactRoot.render(
    <React.StrictMode>
      <AppView />
    </React.StrictMode>
  );
}
