import { makeAutoObservable } from "mobx"
import { inject } from "../lib/globalDI"
import { MouseEventHandler } from "react"
import { OptionsHook } from "../types/OptionsHook"
import { OptionsDBType } from "../lib/DB"

/**
 * View model for the options menu
 *
 * Sets the options in the options model
 */
export class OptionsViewModel {
    private readonly _optionsModel = inject("OptionsModel")
    private readonly _appModel = inject("AppModel")
    private readonly _userPreferences = inject("UserPreferences")

    public constructor() {
        makeAutoObservable(this)
    }

    public readonly onClickBack: MouseEventHandler<Element> = () => {
        this._appModel.stateMachine.send({ type:"BACK" })
    }

    private updateDocumentData(data: Record<string, boolean | string | number>) {
        for (const [key, value] of Object.entries(data)) {
            document.documentElement.dataset[key] = value.toString()
        }
    }

    public async useSettingsAsync(): Promise<OptionsHook> {
        const reducedMotion =
            await this._optionsModel.getReducedMotionAsync() ?? this._userPreferences.getUserPreferedReducedMotion()

        const darkMode =
            await this._optionsModel.getDarkModeAsync() ?? this._userPreferences.getUserPreferedDarkMode()

        const contrast =
            await this._optionsModel.getContrastAsync() ?? this._userPreferences.getUserPreferedContrast()

        this.updateDocumentData({ reducedMotion, darkMode, contrast })

        return [
            {
                name: "reduced-motion",
                value: reducedMotion,
                setValueAsync: async (value: boolean) => {
                    await this._optionsModel.setReducedMotionAsync(value)
                }
            },
            {
                name: "dark-mode",
                value: darkMode,
                setValueAsync: async (value: boolean) => {
                    await this._optionsModel.setDarkModeAsync(value)
                },
            },
            {
                name: "contrast",
                value: contrast,
                setValueAsync: async (value) => {
                    await this._optionsModel.setContrastAsync(value as OptionsDBType["contrast"])
                },
                valueOptions: [["normal", "normal"], ["erhöht", "more"], ["verringert", "less"]]
            }
        ]
    }
}
