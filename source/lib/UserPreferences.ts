import { OptionsDBType } from "./DB"

export const UserPreferences = {
    getUserPreferedReducedMotion: (): boolean =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,

    getUserPreferedDarkMode: (): boolean =>
        window.matchMedia("(prefers-color-scheme: dark)").matches,

    getUserPreferedContrast: (): OptionsDBType["contrast"] => {
        const high = window.matchMedia("(prefers-contrast: more)").matches
        const low = window.matchMedia("(prefers-contrast: less)").matches

        if (high) {
            return "more"
        }

        if (low) {
            return "less"
        }

        return "normal"
    }
}
