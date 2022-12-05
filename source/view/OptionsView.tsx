import React from "react";
import { observer } from "mobx-react";
import { viewModelContainer } from "../viewmodel";

export const OptionsView = observer(() => {
  const vm = viewModelContainer.resolve("OptionsViewModel");

  return <h1>Options</h1>;
});
