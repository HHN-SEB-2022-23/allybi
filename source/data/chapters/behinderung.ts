import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Emotion } from "../../components/Avatar"
import { Tag } from "../../types/Tags"

export const behinderung: Chapter = {
    title: "Behinderung #Ableismus",
    tags: [Tag.behinderung],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du bist auf dem Weg zum Einkaufen. Auf dem Parkplatz bekommst du eine Diskussion zwischen einer Frau und einem Mann mit.",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: "Mann",
            emotion: Emotion.sad,
            text: "Sie dürfen hier nicht parken! Das ist ein Behindertenparkplatz.",
            next: {
                dialogType: DialogType.NPCDialog,
                speaker: "Frau",
                emotion: Emotion.neutral,
                text: "Ich darf hier parken. Ich habe einen Behindertenausweis.",
                next: {
                    dialogType: DialogType.NPCDialog,
                    speaker: "Mann",
                    emotion: Emotion.sad,
                    text: "Das glaube ich Ihnen nicht. Sie sehen gar nicht aus, als hätten sie eine Behinderung. Wenn Sie nicht wegfahren, rufe ich das Ordnungsamt.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Möchtest du einschreiten?",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du verteidigst die Frau.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Nur weil man es ihr nicht ansieht, heißt das nicht, dass diese Frau keine Behinderung hat. Versetzen Sie sich doch mal in ihre Lage. Fänden Sie es angenehm ständig von Passanten nach Ihrem Ausweis gefragt zu werden? Außerdem haben Sie gar nicht das Recht andere Menschen nach ihrem Behindertenausweis zu fragen.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Gut gemacht! Du hast dich für die Frau eingesetzt und versucht den Mann über sein unsensibles Verhalten aufzuklären. Vielleicht hat er ja etwas aus dieser Situation gelernt.",
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Sie kann nachweisen, dass sie eine Behinderung hat. Du musst also nichts tun.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Willst du wirklich nicht einschreiten?",
                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du gehst hin und schlägst vor, dass die Frau ihren Behindertenausweis vorzeigt um die Situation zu entschärfen.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Die Frau ist von der ganzen Situation sichtlich genervt und weigert sich weiter auf die Diskussion oder die Forderung einzugehen.",
                                                        next: {
                                                            dialogType: DialogType.PlayerOptionDialog,
                                                            choices: [
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du bestehst darauf, dass die Frau ihren Behindertenausweis vorzeigt, denn nur so kann der Sachverhalt geklärt werden.",
                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Game Over\nAls Privatperson hast du kein Recht darauf, den (Behinderten-)Ausweis anderer Menschen zu sehen. Du hast sehr unsensibel reagiert und die Frau sogar noch weiter in die Ecke gedrängt durch deine Forderung.\nWenn du eine Diskriminierung mitbekommst, solltest du eingreifen und die diskriminierte Person unterstützen."
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Da die Frau ihren Behindertenausweis nicht zeigen möchte, sagst du dem Mann, dass es keinen Sinn hat weiter zu diskutieren.",
                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Etwas widerwillig setzt der Mann seinen Gang zum Supermarkt fort.",
                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Du hast zwar weitere Diskriminierung durch den Mann verhindert, warst aber selbst unsensibel und diskriminierend mit deinem Vorschlag. Warst du besser als der Mann?",
                                                                        }
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du verteidigst die Frau.",
                                                    next: {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Nur weil man es ihr nicht ansieht, heißt das nicht, dass diese Frau keine Behinderung hat. Versetzen Sie sich doch mal in ihre Lage. Fänden Sie es angenehm ständig von Passanten nach Ihrem Ausweis gefragt zu werden? Außerdem haben Sie gar nicht das Recht andere Menschen nach ihrem Behindertenausweis zu fragen.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Gut gemacht! Du hast dich für die Frau eingesetzt und versucht den Mann über sein unsensibles Verhalten aufzuklären. Vielleicht hat er ja etwas aus dieser Situation gelernt.",
                                                        }
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Sie hat einen Ausweis und du hast mit der Situation nichts zu tun. Also gehst du weiter.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                                    }
                                                },
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du gehst hin und schlägst vor, dass die Frau ihren Behindertenausweis vorzeigt um die Situation zu entschärfen.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Die Frau ist von der ganzen Situation sichtlich genervt und weigert sich weiter auf die Diskussion oder die Forderung einzugehen.",
                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du bestehst darauf, dass die Frau ihren Behindertenausweis vorzeigt, denn nur so kann der Sachverhalt geklärt werden.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Game Over\nAls Privatperson hast du kein Recht darauf, den (Behinderten-)Ausweis anderer Menschen zu sehen. Du hast sehr unsensibel reagiert und die Frau sogar noch weiter in die Ecke gedrängt durch deine Forderung.\nWenn du eine Diskriminierung mitbekommst, solltest du eingreifen und die diskriminierte Person unterstützen."
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Da die Frau ihren Behindertenausweis nicht zeigen möchte, sagst du dem Mann, dass es keinen Sinn hat weiter zu diskutieren.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Etwas widerwillig setzt der Mann seinen Gang zum Supermarkt fort.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Du hast zwar weitere Diskriminierung durch den Mann verhindert, warst aber selbst unsensibel und diskriminierend mit deinem Vorschlag. Warst du besser als der Mann?",
                                                        }
                                                    }
                                                },
                                            ]
                                        }
                                    }
                                },
                            ]
                        }
                    }
                }
            }
        }
    }
}
