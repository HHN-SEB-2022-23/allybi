import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const geschlecht: Chapter = {
    title: "Diskriminierung im Matheunterricht #sexismus",
    tags: [Tag.geschlecht],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Derya besucht ein Gymnasium, die MINT-Fächer waren schon immer ihre Lieblingsfächer, besonders Mathe hat es ihr angetan. Trotz sehr guter schriftlicher Leistungen, nimmt ihr Mathelehrer sie und auch andere Mädchen im regulären Unterricht nicht ernst.\nDie Halbjahresnotenbesprechungen haben stattgefunden und obwohl Derya sich genauso viel gemeldet und inhaltlich zum Unterricht beigetragen hat als andere Mitschüler, erhielt sie eine schlechtere mündliche Note. Du bekommst dies während einer Gruppenarbeit mit.\nWie reagierst du?",
        next: {
            dialogType: DialogType.PlayerOptionDialog,
            choices: [
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du äußerst dich negativ über die Ungerechtigkeit.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Ich finde das ist eine absolute Frechheit von dem Lehrer. Ich bin auf jeden Fall auf deiner Seite.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Derya ist froh, dass sie emotionale Unterstützung von dir bekommt.\nKannst du hier nicht noch mehr tun?",
                            next: {
                                dialogType: DialogType.PlayerOptionDialog,
                                choices: [
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text:"Du gehst auf Derya zu und bietest ihr an, gemeinsam zum Lehrer zu gehen.",
                                        next: {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Der Lehrer weigert sich zwar die Note zu ändern, verspricht aber in Zukunft mehr Rücksicht zu nehmen.\nDas war wohl das Beste, was du aus dieser Situation machen konntest. Es ist gut, dass du für Derya eingestanden bist.",
                                            }
                                        }
                                    },
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Du denkst nicht, dass du ihr noch weiter helfen kannst.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Dein Ansatz, ihr emotionale Unterstützung zu geben, war richtig und hat ihr sicherlich etwas geholfen, jedoch ändert sich an der Gesamtsituation nichts.\nHättest du noch mehr für sie tun können?",
                                        }
                                    },
                                ]
                            }
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du denkst dir, dass das nicht dein Problem ist und du sowieso nichts ändern kannst. Daher tust du nichts.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Willst du wirklich nichts tun?",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Nichts tun",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen.",
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du äußerst dich negativ über die Ungerechtigkeit.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Ich finde das ist eine absolute Frechheit von dem Lehrer. Ich bin auf jeden Fall auf deiner Seite.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Derya ist froh, dass sie emotionale Unterstützung von dir bekommt.\nKannst du hier nicht noch mehr tun?",
                                            next: {
                                                dialogType: DialogType.PlayerOptionDialog,
                                                choices: [
                                                    {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text:"Du gehst auf Derya zu und bietest ihr an, gemeinsam zum Lehrer zu gehen.",
                                                        next: {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Der Lehrer weigert sich zwar die Note zu ändern, verspricht aber in Zukunft mehr Rücksicht zu nehmen.\nDas war wohl das Beste, was du aus dieser Situation machen konntest. Es ist gut, dass du für Derya eingestanden bist.",
                                                            }
                                                        }
                                                    },
                                                    {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Du denkst nicht, dass du ihr noch weiter helfen kannst.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Dein Ansatz, ihr emotionale Unterstützung zu geben, war richtig und hat ihr sicherlich etwas geholfen, jedoch ändert sich an der Gesamtsituation nichts.\nHättest du noch mehr für sie tun können?",
                                                        }
                                                    },
                                                ]
                                            }
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text:"Du gehst auf Derya zu und bietest ihr an, gemeinsam zum Lehrer zu gehen.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Der Lehrer weigert sich zwar die Note zu ändern, verspricht aber in Zukunft mehr Rücksicht zu nehmen.\nDas war wohl das Beste, was du aus dieser Situation machen konntest. Es ist gut, dass du für Derya eingestanden bist.",
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text:"Du gehst auf Derya zu und bietest ihr an, gemeinsam zum Lehrer zu gehen.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Der Lehrer weigert sich zwar die Note zu ändern, verspricht aber in Zukunft mehr Rücksicht zu nehmen.\nDas war wohl das Beste, was du aus dieser Situation machen konntest. Es ist gut, dass du für Derya eingestanden bist.",
                        }
                    }
                }
            ]

        }
    }
}
