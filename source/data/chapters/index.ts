import type { Chapter } from "../../types/Chapter"
import { aussehen } from "./aussehen"
import { geschlecht } from "./geschlecht"
import { herkunft } from "./herkunft"
import { religion } from "./religion"
import { sexualität } from "./sexualität"
import { sozialerStatus } from "./sozialerStatus"

export const chapters: Array<Chapter> = [
    aussehen,
    // behinderung,
    geschlecht,
    herkunft,
    religion,
    sexualität,
    sozialerStatus
]
