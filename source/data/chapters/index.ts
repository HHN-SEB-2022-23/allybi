import type { Chapter } from "../../types/Chapter"
import { alter } from "./alter"
import { aussehen } from "./aussehen"
import { behinderung } from "./behinderung"
import { geschlecht } from "./geschlecht"
import { herkunft } from "./herkunft"
import { religion } from "./religion"
import { sexualitaet } from "./sexualitaet"
import { sozialerStatus } from "./sozialerStatus"

export const chapters: Array<Chapter> = [
    alter,
    aussehen,
    behinderung,
    geschlecht,
    herkunft,
    religion,
    sexualitaet,
    sozialerStatus
]
