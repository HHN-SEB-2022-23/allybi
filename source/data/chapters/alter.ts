import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const alter: Chapter = {
    title: "Diskriminierung am Arbeitsplatz",
    tags: [Tag.diskriminierungstyp1],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Paul (20) ist gelernter Mechaniker und arbeitet seit kurzem in einem neuen Betrieb. Nachdem er sich in seinem neuen Umfeld eingearbeitet hat, sieht er Optimierungsmöglichkeiten beim täglichen Betriebsablauf. Er schreibt eine Liste mit Verbesserungsvorschlägen und übergibt sie seinem Vorgesetzten.",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: "Der Meister",
            text: "Ach, hör mir doch auf. Ich mach das jetzt seit 40 Jahren und lass mir von dir nicht sagen, wie ich meinen Job zu machen hab!",
            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Du und ein paar andere Kollegen haben das Ganze mitbekommen, wie reagierst du?",
                next: {
                    dialogType: DialogType.PlayerOptionDialog,
                    choices: [
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Ich mache gar nichts und arbeite weiter",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Paul ist sichtlich geknickt und geht wieder zurück an seinen Arbeitsplatz. ",

                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich gehe zum Meister und spreche ihn auf sein Verhalten an.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Ich habe gerade euer Gespräch mitbekommen und ich finde das war nicht in Ordnung von dir. Du solltest ihm konstruktives Feedback auf seine Vorschläge geben und dir die Ideen erstmal anhören bevor du abblockst.",

                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: "Der Meister",
                                                    text: "Der Junge hat doch keine Ahnung, wovon er redet in seinem Alter.",

                                                    next: {
                                                        dialogType:
                                                    DialogType.PlayerDialog,
                                                        text: "Sein Alter hat doch nichts damit zu tun, ob er gute Ideen hat. Hör es dir halt wenigstens mal an.",

                                                        next: {
                                                            dialogType:
                                                        DialogType.NPCDialog,
                                                            speaker: "Der Meister",
                                                            text: "Gut, vielleicht hast du ja Recht. Ich denk mal darüber nach und rede dann nochmal mit Paul.",

                                                            next: {
                                                                dialogType:
                                                            DialogType.NarratorDialog,
                                                                text: "Er geht auf  Paul zu, um sich mit ihm auszusprechen und bietet ihm an, sich die Verbesserungsvorschläge mit ihm zusammen anzuschauen.",
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich gehe Paul hinterher und versuche ihn aufzumuntern.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Hey Paul, das war absolut nicht in Ordnung wie der Meister auf deine Vorschläge reagiert hat. Nimm dir das ganze nicht so sehr zu Herzen.Ich finde es gut, dass du dich so im Betrieb einbringst.",
                                                next: {
                                                    dialogType:
                                                DialogType.NarratorDialog,
                                                    text: "Nachdem du Paul etwas aufgemuntert hast, schaust du dir seine Liste an. Da du seine Ideen für sinnvoll erachte, bietest du ihm an, zusammen mit ihm zum Meister zu gehen",
                                                    next: {
                                                        dialogType:
                                                    DialogType.PlayerDialog,
                                                        text: "Komm, ich geh nochmal mit dir zusammen zu ihm und du stellst ihm diesmal tatsächlich deine Ideen vor.",
                                                        next: {
                                                            dialogType:
                                                        DialogType.NarratorDialog,
                                                            text: "Er nimmt deinen Vorschlag dankend an. Du unterstützt ihn beim Vorstellen seiner Idee. Der Meister nimmt die Idee dieses Mal ernst und entschuldigt sich bei Paul.",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich gehe weiter meiner Arbeit nach.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Nach dieser Situation ist Paul meist sehr unmotiviert während der Arbeit und seine Leistung lässt nach. Wenige Wochen später kündigt Paul, da er sich im Betrieb nicht wertgeschätzt fühlt.",
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Ich warte bis das Gespräch vorbei ist und gehe danach auf den Meister zu, um ihm zu erklären, dass ich sein Verhalten unangemessen finde.",
                            next: {
                                dialogType: DialogType.PlayerDialog,
                                text: "Ich habe gerade euer Gespräch mitbekommen und ich finde das war nicht in Ordnung von dir. Du solltest ihm konstruktives Feedback auf seine Vorschläge geben und dir die Ideen erstmal anhören bevor du abblockst.",
                                next: {
                                    dialogType: DialogType.NPCDialog,
                                    speaker: "Der Meister",
                                    text: "Der Junge hat doch keine Ahnung, wovon er redet in seinem Alter.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Sein Alter hat doch nichts damit zu tun, ob er gute Ideen hat. Hör es dir halt wenigstens mal an. ",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Er wird nachdenklich",
                                            next: {
                                                dialogType: DialogType.NPCDialog,
                                                speaker: "Der Meister",
                                                text: "Was soll ich tun?",

                                                next: {
                                                    dialogType:
                                            DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType:
                                                    DialogType.PlayerDialog,
                                                            text: "Ich rate ihm, auf Paul zuzugehen und zumindest einen Blick auf seine Liste zu werfen. Gute Ideen sind ja nicht unbedingt an ein bestimmtes Alter gebunden.",
                                                            next: {
                                                                dialogType:
                                                        DialogType.NarratorDialog,
                                                                text: "Er geht auf  Paul zu, um sich mit ihm auszusprechen und bietet ihm an, sich die Verbesserungsvorschläge mit ihm zusammen anzuschauen. Der Meister gibt zu, dass tatsächlich einige gute Ideen dabei sind und entschuldigt sich bei Paul.",
                                                            },
                                                        },
                                                        {
                                                            dialogType:
                                                    DialogType.PlayerDialog,
                                                            text: "Ich sage ihm, dass die Situation schon vorbei ist und er nichts mehr machen kann. Beim nächsten Mal sollte er aber darauf achten, seine Antwort netter zu formulieren.",
                                                            next: {
                                                                dialogType:
                                                        DialogType.NarratorDialog,
                                                                text: "Nach dieser Situation ist Paul meist sehr unmotiviert während der Arbeit und seine Leistung lässt nach. Wenige Wochen später kündigt Paul, da er sich im Betrieb nicht wertgeschätzt fühlt.",
                                                            },
                                                        },
                                                        {
                                                            dialogType:
                                                    DialogType.PlayerDialog,
                                                            text: "Ich schlage ihm vor, dass ich mit Paul spreche und mir seine Ideen anschaue und bitte ihn, sie sich anschließend anzusehen und Pauls Ideen eine Chance zu geben. Er nimmt meinen Vorschlag an und ich gehe zu Paul.",
                                                            next: {
                                                                dialogType:
                                                        DialogType.NarratorDialog,
                                                                text: "Du gehst Paul hinterher und versuchst ihn aufzumuntern:",
                                                                next: {
                                                                    dialogType:
                                                            DialogType.PlayerDialog,
                                                                    text: "Hey Paul, das war absolut nicht in Ordnung wie der Meister auf deine Vorschläge reagiert hat. Nimm dir das ganze nicht so sehr zu Herzen.Ich finde es gut, dass du dich so im Betrieb einbringst.",
                                                                    next: {
                                                                        dialogType:
                                                                DialogType.NarratorDialog,
                                                                        text: "Nachdem du Paul etwas aufgemuntert hast, schaust du dir seine Liste an. Da du seine Ideen für sinnvoll erachtest, bietest du ihm an, zusammen mit ihm zum Meister zu gehen",
                                                                        next: {
                                                                            dialogType:
                                                                    DialogType.PlayerDialog,
                                                                            text: "Komm, ich geh nochmal mit dir zusammen zu ihm und du stellst ihm diesmal tatsächlich deine Ideen vor.",
                                                                            next: {
                                                                                dialogType:
                                                                        DialogType.NarratorDialog,
                                                                                text: "Er nimmt meinen Vorschlag dankend an. Du unterstützt ihn beim Vorstellen seiner Idee. Der Meister nimmt die Idee dieses Mal ernst und entschuldigt sich bei Paul.",
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Ich beteilige mich an der Konversation und versuche zu vermitteln",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Du unterbrichst deine Arbeit und gehst dazwischen. Beide halten inne und schauen dich fragend an.",

                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich sage dem Meister, dass er sich die Ideen anschauen sollte, da gute Ideen nicht zwingend an ein bestimmtes Alter oder Erfahrung gebunden sind.",
                                            next: {
                                                dialogType: DialogType.NPCDialog,
                                                speaker: "Der Meister",
                                                text: "Der Junge hat doch keine Ahnung, wovon er redet in seinem Alter.",
                                                next: {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Sein Alter hat doch nichts damit zu tun, ob er gute Ideen hat. Hör es dir halt wenigstens mal an. ",
                                                    next: {
                                                        dialogType:
                                                    DialogType.NarratorDialog,
                                                        text: "Nach einem skeptischen Blick hört er auf deinen Vorschlag und schaut sich Pauls Liste an. Nach ein paar Minuten gibt er zu, dass tatsächlich einige gute Ideen dabei sind und entschuldigt sich bei Paul.",
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich sage Paul, dass er auf den Meister hören soll, schließlich hat er Erfahrung und weiß wovon er redet.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Naja, wo er Recht hat, hat er Recht. Er hat viel mehr Erfahrung als du und da hält man halt einfach mal die Füße still als Neuling.",
                                                next: {
                                                    dialogType:
                                                DialogType.NarratorDialog,
                                                    text: "Nach dieser Situation ist Paul meist sehr unmotiviert während der Arbeit und seine Leistung lässt nach. Wenige Wochen später kündigt Paul, da er sich im Betrieb nicht wertgeschätzt fühlt.",
                                                },
                                            },
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Ich ziehe Paul zur Seite und schaue mir seine Ideen an. ",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Hey Paul, kommst du mal kurz her?",
                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: "Paul",
                                                    text: "Ja klar, was gibts?",
                                                    next: {
                                                        dialogType:
                                                    DialogType.PlayerDialog,
                                                        text: "Das war absolut nicht in Ordnung wie der Meister auf deine Vorschläge reagiert hat. Nimm dir das ganze nicht so sehr zu Herzen. Ich finde es gut, dass du dich so im Betrieb einbringst. Komm, ich geh nochmal mit dir zusammen zu ihm und du stellst ihm diesmal tatsächlich deine Ideen vor",
                                                        next: {
                                                            dialogType:
                                                        DialogType.NarratorDialog,
                                                            text: "Du unterstütze ihn beim Vorstellen seiner Idee. Der Meister nimmt die Idee dieses Mal ernst und entschuldigt sich bei Paul.",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            },
        }
    }
}
