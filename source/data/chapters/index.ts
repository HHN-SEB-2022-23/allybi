import type { Chapter } from "../../types/Chapter"
import { alter } from "./alter"
import { geschlecht } from "./geschlecht"
import { sozialerStatus } from "./sozialerStatus"

export const chapters: Array<Chapter> = [
    alter,
    //aussehen,
    // behinderung,
    geschlecht,
    //herkunft,
    //religion,
    //sexualitaet,
    sozialerStatus
]
