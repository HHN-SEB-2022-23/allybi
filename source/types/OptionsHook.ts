export type OptionsBoolean = {
    name: string,
    value: boolean,
    setValueAsync: (value: boolean) => Promise<void>
}

export type OptionsString = {
    name: string,
    value: string,
    setValueAsync: (value: string) => Promise<void>,
    valueOptions: Array<[string, string]>
}

export type OptionsHook = Array<OptionsBoolean | OptionsString>
