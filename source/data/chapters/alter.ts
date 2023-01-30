import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const alter: Chapter = {
    title: "Alter #Adultismus #Ageism",
    tags: [Tag.alter],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Paul (20) ist gelernter Mechaniker und arbeitet seit kurzem in einem neuen Betrieb. Nachdem er sich in seinem neuen Umfeld eingearbeitet hat, sieht er Optimierungsmöglichkeiten beim täglichen Betriebsablauf. Er schreibt eine Liste mit Verbesserungsvorschlägen und übergibt sie seiner Meisterin. Die Meisterin meint daraufhin:",
        next:{
            dialogType: DialogType.NPCDialog,
            speaker: "Meisterin",
            emotion: Emotion.sad,
            text: "Ach, hör mir doch auf. Ich mach das jetzt seit 40 Jahren und lass mir von dir nicht sagen, wie ich meinen Job zu machen hab.",
            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Du bekommst dieses Gespräch mit. Wie reagierst du?",
                next: {
                    dialogType: DialogType.PlayerOptionDialog,
                    choices: [
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Ich mache gar nichts und arbeite weiter.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Willst du wirklich nichts tun?",
                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du wartest bis das Gespräch vorbei ist und gehst danach auf die Meisterin zu, um ihr zu erklären, dass du ihr Verhalten unangemessen findest.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Ich habe gerade euer Gespräch mitbekommen und ich finde, das war nicht in Ordnung von dir. Du solltest Paul konstruktives Feedback auf seine Vorschläge geben und dir die Ideen erstmal anhören bevor du abblockst.",
                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: "Meisterin",
                                                    emotion: Emotion.sad,
                                                    text: "Der Junge hat doch keine Ahnung wovon er redet, in seinem Alter.",
                                                    next: {
                                                        dialogType: DialogType.PlayerOptionDialog,
                                                        choices: [
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Ich sage der Meisterin, dass sie sich die Ideen anschauen sollte, da gute Ideen nicht zwingend an ein bestimmtes Alter oder Erfahrung gebunden sind.",
                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Sie gibt nach und schaut sich Pauls Liste an. Die beiden unterhalten sich noch eine Weile über seine Ideen, bevor beide wieder zurück an die Arbeit gehen.\nEs ist gut, dass du auf die Diskriminierung reagiert hast. Vielleicht hättest du auch direkt in der Situation eingreifen können?",
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Lass gut sein, die Situation ist eh schon vorbei. Du solltest aber echt mal ein bisschen netter zu deinen Mitarbeitern sein.",
                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Du hattest die richtige Idee, hast sie aber leider nicht gut umgesetzt. Es ist unwahrscheinlich, dass sich durch dieses Gespräch etwas verändern wird.\nVielleicht solltest du beim nächsten Mal direkt eingreifen?",
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Nichts tun.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen.",
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du unterbrichst deine Arbeit und gehst dazwischen.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Beide halten inne und schauen dich fragend an.",
                                                next: {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du sagst der Meisterin, dass sie sich die Ideen anschauen sollte, da gute Ideen nicht zwingend an ein bestimmtes Alter oder Erfahrung gebunden sind.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Sie gibt nach und schaut sich Pauls Liste an. Die beiden unterhalten sich noch eine Weile über seine Ideen, bevor sie wieder zurück an ihre Arbeit gehen.\nGut gemacht! Du hast in einem Fall von Altersdiskriminierung eingegriffen und Paul unterstützt.",
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
                            text: "Du wartest bis das Gespräch vorbei ist und gehst danach auf die Meisterin zu, um ihr zu erklären, dass du ihr Verhalten unangemessen findest.",
                            next: {
                                dialogType: DialogType.PlayerDialog,
                                text: "Ich habe gerade euer Gespräch mitbekommen und ich finde, das war nicht in Ordnung von dir. Du solltest Paul konstruktives Feedback auf seine Vorschläge geben und dir die Ideen erstmal anhören bevor du abblockst.",
                                next: {
                                    dialogType: DialogType.NPCDialog,
                                    speaker: "Meisterin",
                                    emotion: Emotion.sad,
                                    text: "Der Junge hat doch keine Ahnung wovon er redet, in seinem Alter.",
                                    next: {
                                        dialogType: DialogType.PlayerOptionDialog,
                                        choices: [
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Ich sage der Meisterin, dass sie sich die Ideen anschauen sollte, da gute Ideen nicht zwingend an ein bestimmtes Alter oder Erfahrung gebunden sind.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Sie gibt nach und schaut sich Pauls Liste an. Die beiden unterhalten sich noch eine Weile über seine Ideen, bevor beide wieder zurück an die Arbeit gehen.\nEs ist gut, dass du auf die Diskriminierung reagiert hast. Vielleicht hättest du auch direkt in der Situation eingreifen können?",
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Lass gut sein, die Situation ist eh schon vorbei. Du solltest aber echt mal ein bisschen netter zu deinen Mitarbeitern sein.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Du hattest die richtige Idee, hast sie aber leider nicht gut umgesetzt. Es ist unwahrscheinlich, dass sich durch dieses Gespräch etwas verändern wird.\nVielleicht solltest du beim nächsten Mal direkt eingreifen?",
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du unterbrichst deine Arbeit und gehst dazwischen.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Beide halten inne und schauen dich fragend an.",
                                next: {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du sagst der Meisterin, dass sie sich die Ideen anschauen sollte, da gute Ideen nicht zwingend an ein bestimmtes Alter oder Erfahrung gebunden sind.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Sie gibt nach und schaut sich Pauls Liste an. Die beiden unterhalten sich noch eine Weile über seine Ideen, bevor sie wieder zurück an ihre Arbeit gehen.\nGut gemacht! Du hast in einem Fall von Altersdiskriminierung eingegriffen und Paul unterstützt.",
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        }

    }
}

