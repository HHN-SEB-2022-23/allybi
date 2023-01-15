/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIContainer } from "@frank-mayer/dilight"

import { UserPreferences } from "./UserPreferences"

import { AppModel } from "../model/AppModel"
import { GameModel } from "../model/GameModel"
import { MainMenuModel } from "../model/MainMenuModel"
import { OptionsModel } from "../model/OptionsModel"

import { AppViewModel } from "../viewmodel/AppViewModel"
import { GameViewModel } from "../viewmodel/GameViewModel"
import { MainMenuViewModel } from "../viewmodel/MainMenuViewModel"
import { OptionsViewModel } from "../viewmodel/OptionsViewModel"
import { QAViewModel } from "../viewmodel/QAViewModel"

// Global dependency injection container
const globalDI = new DIContainer()
    // lib
    .addTransient(UserPreferences, "UserPreferences")
    // model
    .addSingleton(AppModel, "AppModel")
    .addSingleton(GameModel, "GameModel")
    .addSingleton(MainMenuModel, "MainMenuModel")
    .addSingleton(OptionsModel, "OptionsModel")
    // viewmodel
    .addSingleton(AppViewModel, "AppViewModel")
    .addSingleton(MainMenuViewModel, "MainMenuViewModel")
    .addSingleton(GameViewModel, "GameViewModel")
    .addSingleton(OptionsViewModel, "OptionsViewModel")
    .addSingleton(QAViewModel, "QAViewModel")

globalThis.globalDI = globalDI

/**
 * Resolved services from the global dependency injection container
 */
export const inject = globalDI.getInjector()

// hack
// trigger OptionsViewModel to update the document data
globalDI.resolve("OptionsViewModel").useSettingsAsync()
