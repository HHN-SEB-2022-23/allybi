/* eslint-disable no-restricted-syntax */
import { createMachine, interpret } from "xstate"
import { inject } from "./globalDI"
import { AppState } from "../types/AppState"

const machine =
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgFkBBASQDkB9MgURoFUBiAeQAUAVKjmgGUA2gAYAuolAAHAPaxcAF1yz8UkAA9EAZgCsAJhIB2bQBZtR3QBoQAT0SnRJXQA5tZ3bu0BGUS9EAbKYAvsE2aFh4hKSUtAzM7II8FABKPGKSSCByCsqq6loI2qJGJPoAnAEulkblRi6+Ljb2COYuJN4BXXVGlrq9+qHhGDgExOTU9EysbACKFBnqOUoqalmFeoYm5pbNiAC0paadAbqmplXl3uXaAd5DIBGj0RNx0yx03HwCgmwAQhQAMIAaUWWWWeTWoA2DRI5XK+muRiqF3O2j2rRuHS6Rm89SMFwCxV0DyeUXGADEqAAZHiMFL-IGgiRLeQrfLrHSw+GIuoooLmDHaaokLrdTzePG6U7aUkjcmkKm0+lsJKpdIs8FsyEFRBGQIkURG0S+coNU5VDGObTONy3Fz+Uz6fQucohMKPeVjUhxADiFCYjJBYJk2tWuoQjVK3lMLnO0uO3ld1jsOiCxl0RuF+n6ROK7uGkW9JD9AcYnF4-CEIeyYY50MQUY6sfjQUlyYx+hKZUzomzufcogLnqLL1LTE+lZ+QeZmVDuXDnMjgQCoqCfjODrd3k7AUM7ncsYRVUlpzlo-G8xnNYhi4bRW5CKR-LRGIdtsPnh8fkC7o9+FkCA4HUMlvVZBd600A4AgxfY3ThE5PDOAw-Ddc9nnGWIpgScD2ShKDWn0DE6lFUxXFjRFpVESoSQ9UCXiw+JWEnb4hFwnUlxjUR910N1AnqLtcR3VNI36EhhTONtylEVx9FMIx0IVEglTpFJ2LvAjezKZEh2qZEnV2EThScVx3F7VwjGdRTi3HRh1MgwoGlKFwXW8dwY3bcoUxaHMtl7Pt5IsXo3Ossd6H9CcvirQR7PwwpJVxDpql0a4iU6X9O08Hssxcgd81Cy8KFiiM7nKDppX0AIh2OeS6jfUoKiqSx9D0eE3AU0JgiAA */
createMachine({
    tsTypes: {} as import("./StateMachine.typegen").Typegen0,
    predictableActionArguments: true,
    states: {
        MAIN_MENU: {
            invoke: {
                src: "MAIN_MENU"
            },
            on: {
                OPTIONS: "MAIN_MENU_OPTIONS",
                START: "FILTER",
                QA: "QA",
                CREDITS: "CREDITS"
            }
        },

        MAIN_MENU_OPTIONS: {
            invoke: {
                src: "OPTIONS"
            },
            on: {
                BACK: "MAIN_MENU"
            }
        },

        FILTER: {
            invoke: {
                src: "FILTER"
            },
            on: {
                BACK: "MAIN_MENU",
                START: "IN_GAME"
            }
        },

        CREDITS: {
            invoke: {
                src: "CREDITS"
            },
            on: {
                BACK: "MAIN_MENU"
            }
        },

        "IN_GAME": {
            invoke: {
                src: "GAME"
            },
            on: {
                BACK: "MAIN_MENU",
                OPTIONS: "IN_GAME_OPTIONS"
            }
        },

        "IN_GAME_OPTIONS": {
            invoke: {
                src: "OPTIONS"
            },
            on: {
                BACK: "IN_GAME"
            }
        },
        "QA": {
            invoke: {
                src: "QA"
            },
            on: {
                BACK: "MAIN_MENU"
            }
        }
    },

    initial: "MAIN_MENU",
}, {
    services: {
        MAIN_MENU: () => {
            if (!("globalDI" in globalThis)) {
                return Promise.resolve() as Promise<never>
            }

            inject("AppModel").state = AppState.MAIN_MENU
            return Promise.resolve() as Promise<never>
        },
        GAME: async () => {
            const appModel = inject("AppModel")
            const gameModel = inject("GameModel")
            gameModel.reset()
            await gameModel.initChapterAsync()
            await gameModel.getAvaliableChaptersAsync()
            appModel.state = AppState.IN_GAME
            return Promise.resolve() as Promise<never>
        },
        FILTER: () => {
            inject("AppModel").state = AppState.FILTER
            return Promise.resolve() as Promise<never>
        },
        CREDITS: () => {
            inject("AppModel").state = AppState.CREDITS
            return Promise.resolve() as Promise<never>
        },
        OPTIONS: () => {
            inject("AppModel").state = AppState.OPTIONS
            return Promise.resolve() as Promise<never>
        },
        QA: () => {
            inject("AppModel").state = AppState.QA
            return Promise.resolve() as Promise<never>
        },
    }
})

export const stateMachine = interpret(machine).start()
