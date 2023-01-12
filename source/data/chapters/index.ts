import type { Chapter } from "../../types/Chapter"
import { aussehen } from "./aussehen"
import { geschlecht } from "./geschlecht"
import { herkunft } from "./herkunft"
import { religion } from "./religion"
import { sexualitaet } from "./sexualitaet"
import { sozialerStatus } from "./sozialerStatus"

export const chapters: Array<Chapter> = [
    aussehen,
    // behinderung,
    geschlecht,
    herkunft,
    religion,
    sexualitaet,
    sozialerStatus
]
