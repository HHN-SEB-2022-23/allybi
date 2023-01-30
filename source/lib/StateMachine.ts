/* eslint-disable no-restricted-syntax */
import { createMachine, interpret } from "xstate"
import { inject } from "./globalDI"
import { AppState } from "../types/AppState"

const machine =

/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgFkBBASQDkB9MgURoFUBiAeQAUAVKjmgGUA2gAYAuolAAHAPaxcAF1yz8UkAA9EAZgCsAJhIB2bQBZtR3QBoQAT0SnRJXQA5tZ3bu0BGUS9EAbKYAvsE2aFh4hKSUtAzM7II8FABKPGKSSCByCsqq6loI2qJGJPoAnAEulkblRi6+Ljb2COYuJN4BXXVGlrq9+qHhGDgExOTU9EysbACKFBnqOUoqalmFeoYm5pbNiAC0paadAbqmplXl3uXaAd5DIBGj0RNx0+wAwimMACJUPCIJEt5Ct8usdAZjGYLNY7AdPCRjl0zhcXFcbgEHk8ouNYlMEnRuHwBII2AAhCgfADSiyyyzya1AGwaJHK5X01yMVQu520e1aNw6XSM3nqRguAWKuixIxxpAAYlQADI8RgpcmUmlAukghkFHQstkcurcoLmfnaaokLrdTzeUW6U7aGWRMYK5Wq9VJVLpbUyXWrfUIIyBEiicOiXzlBqnKr8xzaZxuW4ufymfT6NEhMKPWVukhfX7-UkU6m0-25QPghCZgLGUQ+fSwlqeXTW4Wi6oS5057H5uIAcQoTA1Zb92QDYKZiEapW8phc50dx28aObOiCxl04ctTa57lE2eGrpeg+HjE4vH4QnLE8rU80M78c4XS6C9rX-P0JTK24bLj3SViiPXMT3GeZRy1TIK1BRlHyKQ12U5U1eX5VMk3cUxPB8PxAhAvtT3oIcmDofRL2JG9x3pKtpwQcoEWuEpRXcfwvACflOm8YxU28dx5wCcVzkxXs80IuhiMYQkrxJNgIFUMASAIAA3WQAGsFII8YzxIolr0EBBlNkTB0AZDJb2oh9Cm8b9ExMNleMXATvDODiLjDY5RH0M1MwzQ8XWeLSiPPUjIPMyc4MKGMSDcAJa3qfQzD8NDTERfoMwaNxRC8XRylCHN8FkCA4HUTSiGBe8IoOBd+X2edDCuLpTEqOr5xcfy5VefFWHK2Cg3Tfk6mtLDFwA5yAlESppREsCYkmeJWCkijBB6vVq3nTySD0cpHAEgCmO8Dj+k2lwznfcosoA0wjHa-NFRVNUVpo+C-zKLlD2qLl012OEEKcVx3D-VwjAzG6XkLP4AUeyzEFEflXHKIUnLFbtQcC8TzyhyqEAaUoAIaPiV0-H6my2P8Gyuixel41HSG0yTdJJTGg3tEUOmqXRrklTo8K-BEmx3AD+iAvzpoC0h5iZ6s7gRsavMPY4rrqNDSgqKpLASnLowsGmSDp0jJdojFotuOKAMSpofrcMoSl8prF2jM48uCIA */
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

        IN_GAME_2: {
            invoke: {
                src: "GAME_2"
            },
            on: {
                OPTIONS: "IN_GAME_OPTIONS",
                BACK: "MAIN_MENU"
            }
        },

        "IN_GAME_OPTIONS": {
            invoke: {
                src: "OPTIONS",
            },
            on: {
                BACK: "IN_GAME_2"
            }
        },

        "QA": {
            invoke: {
                src: "QA"
            },
            on: {
                BACK: "MAIN_MENU"
            }
        },

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
        GAME_2: () => {
            const appModel = inject("AppModel")
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
