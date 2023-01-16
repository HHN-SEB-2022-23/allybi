import { makeAutoObservable } from "mobx"
import type { MouseEventHandler } from "react"
import type { FilterEntry, FilterHook } from "../types/FilterHook"
import { inject } from "../lib/globalDI"
import { Tag } from "../types/Tags"

export class FilterViewModel {
    private readonly _filterModel = inject("FilterModel")
    private readonly _appModel = inject("AppModel")
    private readonly _gameModel = inject("GameModel")

    onClickBack: MouseEventHandler<HTMLButtonElement> = () => {
        this._appModel.navigateBack()
    }

    onClickPlay: MouseEventHandler<HTMLButtonElement> = () => {
        this._appModel.startGame()
        this._gameModel.reset()
        this._gameModel.initChapter()
    }

    constructor() {
        makeAutoObservable(this)
    }

    private getAllTags() {
        return Tag
            .values
            .map(tag => ({
                tag: tag,
            } satisfies Partial<FilterEntry>))
    }

    async useFilterAsync(): Promise<FilterHook> {
        return await Promise.all(
            this.getAllTags()
                .map(async (tag) => {
                    return {
                        ...tag,
                        active: (await this._filterModel.getFilterAsync(tag.tag.id)) ?? true
                    }
                })
        )
    }

    async setFilterAsync(tag: Tag, checked: boolean) {
        await this._filterModel.setFilterAsync(tag.id, checked)
    }
}
