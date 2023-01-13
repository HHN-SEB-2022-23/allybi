import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const geschlecht: Chapter = {
    title: "Diskriminierung im Matheunterricht",
    tags: [Tag.geschlecht],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Derya besucht ein Gymnasium, die MINT-Fächer waren schon immer ihre Lieblingsfächer, besonders Mathe hat es ihr angetan. Trotz sehr guter schriftlicher Leistungen, nimmt ihr Mathelehrer sie und auch andere Mädchen im regulären Unterricht nicht ernst.\nDie Halbjahresnotenbesprechungen haben stattgefunden und obwohl Derya sich genauso viel gemeldet und inhaltlich zum Unterricht beigetragen hat, als ein anderer Mitschüler, erhielt sie eine schlechtere mündliche Note.\nDu bekommst dies in einer Gruppenarbeit mit.",
        next: {
            dialogType: DialogType.NarratorDialog,
            text: "Wie reagierst du?",
            next: {
                dialogType: DialogType.PlayerOptionDialog,
                choices: [
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Ich denke mir, dass das nicht mein Problem ist und ich sowieso nichts ändern kann. Daher tue ich nichts.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Im Verlauf der Woche merkst du, dass Derya kaum noch aktiv am Matheunterricht teilnimmt und niedergeschlagen wirkt.",
                            next: {
                                dialogType: DialogType.PlayerOptionDialog,
                                choices: [
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Ich tue weiterhin nichts, weil ich denke, dass es jetzt vorbei ist und sie darüber hinweg kommen wird.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "In den folgenden Monaten lassen Deryas Leistungen im Matheunterricht merklich nach. Sie meldet sich kaum noch und schreibt schlechtere Noten. Auch ihre Stimmung ist während des Matheunterrichts sichtlich gedrückt.",
                                        },
                                    },
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Ich gehe auf Derya zu und biete ihr an gemeinsam zum Lehrer zu gehen",
                                        next: {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hälst du davon wenn wir zussammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text:"Er ist skeptisch, aber denkt nochmal darüber nach, da er es nicht nur als Deryas persönliche Wahrnehmung abstempelt, wenn es eine zweite Person mit dieser Ansicht gibt.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Schließlich wird Deryas Note abgeändert und sie hat weiterhin Freude an ihrem Lieblingsfach und das Verhalten des Lehrers hat sich immerhin etwas gebessert.",

                                                    },
                                                },
                                            },
                                        },
                                    },
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Ich äußere dich negativ über diese Ungerechtigkeit und frage sie, ob sie darüber reden möchte. Ich traue mich jedoch nicht, aktiv ein Gespräch mit dem Lehrer zu suchen",
                                        next: {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich finde das ist eine absolute Frechheit von dem Lehrer. Wir sind auf jeden Fall auf deiner Seite.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Derya ist sichtlich froh, dass sie emotionale unterstützung bekommt, aber weiterhin deprimiert.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "In den folgenden Monaten lassen Deryas Leistungen im Matheunterricht merklich nach. Sie meldet sich kaum noch und schreibt schlechtere Noten. Auch ihre Stimmung ist während des Matheunterrichts sichtlich gedrückt.",
                                                },
                                            },
                                        },
                                    }
                                ],
                            },
                        },
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Du äußerst dich negativ über die Ungerechtigkeit.",
                        next: {
                            dialogType: DialogType.PlayerDialog,
                            text: "Ich finde das ist eine absolute Frechheit von dem Lehrer. Wir sind auf jeden Fall auf deiner Seite.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Derya ist sichtlich froh, dass sie emotionale unterstützung bekommt, aber weiterhin deprimiert.",
                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich denke mir, dass ich sowieso nichts ändern kann, deswegen belasse ich es bei diesem Gespräch",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Im Verlauf der Woche merkst du, dass Derya kaum noch aktiv am Matheunterricht teilnimmt und niedergeschlagen wirkt.",
                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Ich tue weiterhin nichts, weil ich denke, dass es jetzt vorbei ist und sie darüber hinweg kommen wird.",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "In den folgenden Monaten lassen Deryas Leistungen im Matheunterricht merklich nach. Sie meldet sich kaum noch und schreibt schlechtere Noten. Auch ihre Stimmung ist während des Matheunterrichts sichtlich gedrückt.",
                                                            },
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Ich gehe auf Derya zu und biete ihr an gemeinsam zum Lehrer zu gehen.",
                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Er ist skeptisch, aber denkt nochmal darüber nach, da er es nicht nur als Deryas persönliche Wahrnehmung abstempelt, wenn es eine zweite Person mit dieser Ansicht gibt.",
                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Schließlich wird Deryas Note abgeändert und sie hat weiterhin Freude an ihrem Lieblingsfach und das Verhalten des Lehrers hat sich immerhin etwas gebessert.",
                                                                    },
                                                                },
                                                            },
                                                        }
                                                    ],
                                                },
                                            },
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich gehe auf Derya zu und biete ihr an gemeinsam zum Lehrer zu gehen.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Er ist skeptisch, aber denkt nochmal darüber nach, da er es nicht nur als Deryas persönliche Wahrnehmung abstempelt, wenn es eine zweite Person mit dieser Ansicht gibt.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Schließlich wird Deryas Note abgeändert und sie hat weiterhin Freude an ihrem Lieblingsfach und das Verhalten des Lehrers hat sich immerhin etwas gebessert.",
                                                    },
                                                },
                                            },
                                        }
                                    ],
                                },
                            },
                        },
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Ich gehst auf Derya zu und biete ihr an gemeinsam zum Lehrer zu gehen.",
                        next: {
                            dialogType: DialogType.PlayerDialog,
                            text: "Hey, ich muss nochmal mit dir über die Mathenoten reden. Ich finde das absolut unfair, wie er dich bewertet hat. Was hältst du davon, wenn wir zusammen zu ihm gehen und ihn gemeinsam darauf ansprechen? Wenn er dir blöd kommt, kann ich dich unterstützen.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Derya ist zuerst verunsichert, aber traut sich mit deiner Unterstützung zum Lehrer zu gehen. Er ist skeptisch, aber denkt nochmal darüber nach, da er es nicht nur als Deryas persönliche Wahrnehmung abstempelt, wenn es eine zweite Person mit dieser Ansicht gibt.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Schließlich wird Deryas Note abgeändert und sie hat weiterhin Freude an ihrem Lieblingsfach und das Verhalten des Lehrers hat sich immerhin etwas gebessert.",
                                },
                            },
                        },
                    }
                ],
            },
        },
    }
}
