import React, { useState } from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"
import { useAwaited } from "../lib/useAwaited"
import { OptionsHook, OptionsBoolean, OptionsString } from "../types/OptionsHook"

/**
 * The options view.
 *
 * This view is responsible for rendering the options menu.
 */
export const OptionsView = observer(() => {
    const _optionsViewModel = inject("OptionsViewModel")
    const _settings = useAwaited<OptionsHook>(_optionsViewModel.useSettingsAsync(), [])
    const [updateCound, setUpdateCount] = useState(0)
    const notifyPropertyChanged = (prop: string) => window.setTimeout(() => {
        setUpdateCount(updateCound + 1)
    }, 0)

    return <nav className="menu">
        <h1 className="menu__title">Optionen</h1>
        <ol>
            {
                _settings.map((setting, i) => <li key={i}>
                    <label className="menu__item" key={i}>
                        {setting.name}
                        {
                            typeof setting.value == "boolean"
                                ? OptionsBooleanView(setting, notifyPropertyChanged)
                                : OptionStringView(setting, notifyPropertyChanged)
                        }
                    </label>
                </li>)
            }
        </ol>
        <button onClick={_optionsViewModel.onClickBack} className="menu__item">Zurück</button>
    </nav>
})

const OptionsBooleanView = (setting: OptionsBoolean, notifyPropertyChanged: (prop: string)=>void) =>
    <input
        type="checkbox"
        checked={setting.value}
        onChange={ev => {
            setting.setValueAsync(ev.target.checked).then(() => {
                notifyPropertyChanged(setting.name)
            })
        }}
    />

const OptionStringView = (setting: OptionsString, notifyPropertyChanged: (prop: string)=>void) =>
    <select
        defaultValue={setting.value}
        onChange={(ev) => {
            setting.setValueAsync(ev.target.value).then(() => {
                notifyPropertyChanged(setting.name)
            })
        }}
    >
        {
            setting.valueOptions.map(
                (valueOption, i) =>
                    <option
                        key={i}
                        value={valueOption}
                    >
                        {valueOption}
                    </option>
            )
        }
    </select>
