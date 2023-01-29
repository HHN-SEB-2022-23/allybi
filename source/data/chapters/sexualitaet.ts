import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const sexualitaet: Chapter = {
    title: "Sexuelle Orientierung #Homphobie",
    tags: [Tag.sexualitaet],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du studierst an einer Hochschule und hörst, wie eine Kommilitonin (Franziska) über einen anderen Kommilitonen (Lee) redet, welcher homosexuell ist. Sie sagt, dass das unnatürlich sei. Du überlegst, was du tun sollst.",
        next: {
            dialogType: DialogType.PlayerOptionDialog,
            choices: [
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du denkst nicht, dass du die Meinung von Franziska ändern kannst und tust daher nichts.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Bist du dir sicher, dass du nichts tun möchtest?",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Nichts tun.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du schlägst Franziska ein Treffen mit Lee vor, damit sie sich ein besseres Bild von ihm machen kann, bevor sie über ihn urteilt.",
                                    next: {
                                        dialogType: DialogType.NPCDialog,
                                        speaker: "Franziska",
                                        emotion: Emotion.neutral,
                                        text: "Ja, von mir aus. Das wird aber nichts an meiner Meinung ändern.",
                                        next:{
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Mit ihrer Einverständnis, holst du Lee dazu und versuchst ihr zu erklären, dass Homosexualität normal ist.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Game Over\nDu hast Lee wissentlich einer diskriminierenden Person ausgesetzt, ohne es davor mit ihm abgesprochen zu haben. Du weißt nicht wie diese Situation verläuft und kannst so keinen sicheren Raum für Lee schaffen.\nSoetwas solltest du nur mit Personen machen, welche sich vorher ausdrücklich dazu bereit erklärt haben und sich bewusst sind, in was für eine Situation sie sich begeben."
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du erzählst Lee von dieser Situation und fragst ihn nach seinem Einverständnis und dem Zeitpunkt für das Treffen.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Game Over\nSelbst mit Lees Einverständnis wäre dieses Treffen keine gute Idee. Du setzt ihn damit im schlimmsten Fall noch mehr Diskriminierung aus, was du natürlich absolut vermeiden solltest. Du weißt nicht, wie Franziska sich verhalten wird und kannst somit auch keine sichere Umgebung für Lee garantieren."
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du startest ein Gespräch mit Franziska und erklärst ihr, dass Homosexualität normal ist.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Homosexualität ist ganz normal. Es gibt viele gleichgeschlechtliche Paare und diese Menschen sind auch nicht anders als du oder ich. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, ohne ihn zu kennen.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Franziska geht nicht auf deine Argumente ein und läuft davon.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Gut gemacht!\nDu bist für Lee eingestanden. Vielleicht denkt Franziska das nächste Mal besser über ihre verletzenden Aussagen nach. Das wäre wohl das Beste, das du in dieser Situation erreichen kannst."
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du startest ein Gespräch mit Franziska und erklärst ihr, dass Homosexualität normal ist.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Homosexualität ist ganz normal. Es gibt viele gleichgeschlechtliche Paare und diese Menschen sind auch nicht anders als du oder ich. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, ohne ihn zu kennen.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Franziska geht nicht auf deine Argumente ein und läuft davon.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Gut gemacht!\nDu bist für Lee eingestanden. Vielleicht denkt Franziska das nächste Mal besser über ihre verletzenden Aussagen nach. Das wäre wohl das Beste, das du in dieser Situation erreichen kannst."
                            }
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du schlägst Franziska ein Treffen mit Lee vor, damit sie sich ein besseres Bild von ihm machen kann, bevor sie über ihn urteilt.",
                    next: {
                        dialogType: DialogType.NPCDialog,
                        speaker: "Franziska",
                        emotion: Emotion.neutral,
                        text: "Ja, von mir aus. Das wird aber nichts an meiner Meinung ändern.",
                        next:{
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Mit ihrer Einverständnis, holst du Lee dazu und versuchst ihr zu erklären, dass Homosexualität normal ist.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Game Over\nDu hast Lee wissentlich einer diskriminierenden Person ausgesetzt, ohne es davor mit ihm abgesprochen zu haben. Du weißt nicht wie diese Situation verläuft und kannst so keinen sicheren Raum für Lee schaffen.\nSoetwas solltest du nur mit Personen machen, welche sich vorher ausdrücklich dazu bereit erklärt haben und sich bewusst sind, in was für eine Situation sie sich begeben."
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du erzählst Lee von dieser Situation und fragst ihn nach seinem Einverständnis und dem Zeitpunkt für das Treffen.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Game Over\nSelbst mit Lees Einverständnis wäre dieses Treffen keine gute Idee. Du setzt ihn damit im schlimmsten Fall noch mehr Diskriminierung aus, was du natürlich absolut vermeiden solltest. Du weißt nicht, wie Franziska sich verhalten wird und kannst somit auch keine sichere Umgebung für Lee garantieren."
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
}
