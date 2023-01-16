import React, { useState } from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"
import { useAwaited } from "../lib/useAwaited"
import { FilterHook } from "../types/FilterHook"

/**
 * The options view.
 *
 * This view is responsible for rendering the options menu.
 */
export const FilterView = observer(() => {
    const _filterViewModel = inject("FilterViewModel")
    const _filter = useAwaited<FilterHook>(_filterViewModel.useFilterAsync(), [])
    const [updateCound, setUpdateCount] = useState(0)
    const notifyPropertyChanged = () => window.setTimeout(() => {
        setUpdateCount(updateCound + 1)
    }, 0)

    return <div className="menu">
        <h1 className="menu__title">Filter</h1>
        <p>Du möchtest Themen ausschließen? Das kannst du hier tun:</p>
        <button onClick={_filterViewModel.onClickBack} className="menu__item">Zurück</button>
        <ol>
            {
                _filter.map((filter, i) => <li key={i}>
                    <label className="menu__item">
                        {filter.tag.toString()}
                        <input
                            type="checkbox"
                            checked={filter.active}
                            onChange={(ev) => {
                                _filterViewModel.setFilterAsync(filter.tag, ev.target.checked)
                                    .then(() => {
                                        notifyPropertyChanged()
                                    })
                            } } />
                    </label>
                </li>)
            }
        </ol>
        <button
            className="menu__item"
            onClick={_filterViewModel.onClickPlay}
        >
            Starten
        </button>
    </div>
})
