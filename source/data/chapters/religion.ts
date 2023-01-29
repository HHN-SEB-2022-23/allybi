/* eslint-disable max-len */
import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const religion: Chapter = {
    title: "Religion #Islamfeindlichkeit",
    tags: [Tag.religion],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du beobachtest in der Bahn, dass ein älterer Herr zu einem jungen Mädchen mit Kopftuch sagt:",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: "Älterer Herr",
            emotion: Emotion.sad,
            text: "Geh zurück, wo du hergekommen bist!",
            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Die anderen Fahrgäste schauen weg. Das eingeschüchterte, junge Mädchen, traut sich nicht etwas zu sagen.\nWas tust du?",
                next: {
                    dialogType: DialogType.PlayerOptionDialog,
                    choices: [
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du setzt dich neben das Mädchen und fängst eine Unterhaltung mit ihr an.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Das Mädchen wirkt erleichtert und lässt sich auf das Gespräch mit dir ein. Der Mann ist nicht begeistert über die nun fehlende Aufmerksamkeit. Er murmelt noch ab und an vor sich hin, bleibt aber ansonsten ruhig.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Das war eine schwierige Situation, dennoch hast du einen Weg gefunden, um das Mädchen vor weiterer Diskriminierung durch den älteren Herrn zu bewahren. Gut gemacht!\nSolche Situationen sind oft schwierig einzuschätzen, aber es ist wichtig, dass man diskriminierte Menschen unterstützt. Achte nur darauf, dich selbst nicht in Gefahr zu bringen und hol im Zweifel lieber Hilfe."
                                }
                            }
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du greifst nicht ein.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Willst du wirklich nicht eingreifen?",
                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du greifst nicht ein.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du gehst dazwischen und verteidigst das Mädchen.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Der ältere Herr ist überrascht, dass du das Mädchen verteidigst. Er sieht sich im Recht und versucht noch mit dir zu diskutieren, jedoch gehst du nicht darauf ein und beharrst darauf, dass er das Mädchen in Ruhe lassen soll.\nNachdem er merkt, dass du nicht auf eine Diskussion eingehst, lässt er von dir und dem Mädchen ab und verhält sich den Rest der Fahrt ruhig.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Gut gemacht! Das war eine schwierige Situation und trotzdem hast du es geschafft das Mädchen vor weiterer Diskriminierung durch den älteren Herrn zu bewahren.\nSolche Situationen sind oft schwierig einzuschätzen, aber es ist wichtig, dass man diskriminierte Menschen unterstützt. Achte nur darauf, dich selbst nicht in Gefahr zu bringen und hol im Zweifel lieber Hilfe."
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du setzt dich neben das Mädchen und fängst eine Unterhaltung mit ihr an.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Das Mädchen wirkt erleichtert und lässt sich auf das Gespräch mit dir ein. Der Mann ist nicht begeistert über die nun fehlende Aufmerksamkeit. Er murmelt noch ab und an vor sich hin, bleibt aber ansonsten ruhig.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Das war eine schwierige Situation, dennoch hast du einen Weg gefunden, um das Mädchen vor weiterer Diskriminierung durch den älteren Herrn zu bewahren. Gut gemacht!\nSolche Situationen sind oft schwierig einzuschätzen, aber es ist wichtig, dass man diskriminierte Menschen unterstützt. Achte nur darauf, dich selbst nicht in Gefahr zu bringen und hol im Zweifel lieber Hilfe."
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du gehst dazwischen und verteidigst das Mädchen.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Der ältere Herr ist überrascht, dass du das Mädchen verteidigst. Er sieht sich im Recht und versucht noch mit dir zu diskutieren, jedoch gehst du nicht darauf ein und beharrst darauf, dass er das Mädchen in Ruhe lassen soll.\nNachdem er merkt, dass du nicht auf eine Diskussion eingehst, lässt er von dir und dem Mädchen ab und verhält sich den Rest der Fahrt ruhig.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Gut gemacht! Das war eine schwierige Situation und trotzdem hast du es geschafft das Mädchen vor weiterer Diskriminierung durch den älteren Herrn zu bewahren.\nSolche Situationen sind oft schwierig einzuschätzen, aber es ist wichtig, dass man diskriminierte Menschen unterstützt. Achte nur darauf, dich selbst nicht in Gefahr zu bringen und hol im Zweifel lieber Hilfe."
                                }
                            }
                        },
                    ]
                }
            }
        }
    }
}
