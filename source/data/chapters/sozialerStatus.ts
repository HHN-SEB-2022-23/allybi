/* eslint-disable max-len */
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"
import { Emotion } from "../../components/Avatar"

export const sozialerStatus: Chapter = {
    "title": "Sozialer Status #Klassismus",
    "tags": [Tag.sozialerStatus],
    "headDialog": {
        dialogType: DialogType.NarratorDialog,
        "text": "Nach einer entspannten 8:00 Uhr Vorlesung begibst du dich auf den Hof, um etwas zu essen. Du hörst wie zwei deiner Kommilitonen (Alex und Steve) einem dritten (Luca) sagen, dass er wenig Hoffnung haben sollte sein Studium zu bestehen, da seine Eltern beide keine Akademikerinnen sind und er zu wenig Geld hätte. Sie sagen Dinge wie:\nWie willst du denn ordentlich studieren, wenn du nebenbei arbeiten musst?\nLuca ist das sichtlich unangenehm.",
        next:{
            dialogType: DialogType.PlayerOptionDialog,
            choices: [
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Jungs, das ist ihm offensichtlich unangenehm, schaltet mal einen Gang runter.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Jeder seichte Witz kann eine andere Person hart treffen. Manche mehr, manche weniger.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Die zwei gucken verdutzt.",
                            next: {
                                dialogType: DialogType.PlayerDialog,
                                text: "Auch wenn ihr es nur als Spaß meintet, muss euch klar sein, dass es Luca verletzt.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Die zwei sind erst ruhig, geben aber nach kurzer Zeit nach.",
                                    next: {
                                        dialogType: DialogType.NPCDialog,
                                        speaker: "Alex",
                                        emotion: Emotion.sad,
                                        text: "Du hast ja recht.",
                                        next: {
                                            dialogType: DialogType.NPCDialog,
                                            speaker: "Steve",
                                            emotion: Emotion.sad,
                                            text: "Es tut uns leid.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Du hast die Situation so gut wie möglich gemeistert."
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Oh, du hast einen Job in der Nähe? Ich brauch auch noch einen.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Luca erzählt von der Bar, in der er arbeitet und fragt, ob er dich vermitteln soll.\nDie anderen zwei steigen wieder ein und fragen, ob denn hier jeder einfach in die Uni reingelassen wird.",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du gehst nicht auf die Provokation ein und unterhältst dich weiter mit Luca.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Oh ja, das wäre super, wenn du mich vermittelst!",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Alex und Steve sind sichtlich frustriert und gehen weg.\nIhr quatscht noch ein wenig miteinander und tauscht Nummern aus, bevor Luca sich verabschiedet.\nDu hast eingegriffen und Luca unterstützt. Gut gemacht!",
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Du gehst auf die Provokation ein und beleidigst sie.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Alex und Steve schauen verdutzt, murmeln noch etwas vor sich hin und ziehen dann ab.\nDu bist die zwei losgeworden, aber hast sie beleidigt. War das wirklich der richtige Weg?",
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du hälst dich raus.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Willst du wirklich nichts tun?",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
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
                                    text: "Oh, hast du einen Job in der Nähe? Ich brauch auch noch was.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Luca erzählt von der Bar, in der er arbeitet und fragt, ob er dich vermitteln soll.\nDie anderen zwei steigen wieder ein und fragen, ob denn hier jeder einfach in die Uni reingelassen wird.",
                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du gehst nicht auf die Provokation ein und unterhältst dich weiter mit Luca.",
                                                    next: {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Oh ja, das wäre super, wenn du mich vermittelst!",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Alex und Steve sind sichtlich frustriert und gehen weg.\nIhr quatscht noch ein wenig miteinander und tauscht Nummern aus, bevor Luca sich verabschiedet.\nDu hast eingegriffen und Luca unterstützt. Gut gemacht!",
                                                        }
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du gehst auf die Provokation ein und beleidigst sie.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Alex und Steve schauen verdutzt, murmeln noch etwas vor sich hin und ziehen dann ab.\nDu bist die zwei losgeworden, aber hast sie beleidigt. War das wirklich der richtige Weg?",
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Jungs, das ist ihm offensichtlich unangenehm, schaltet mal einen Gang runter.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Jeder Witz kann eine andere Person hart treffen. Manche mehr, manche weniger.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Die zwei gucken verdutzt.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Auch wenn ihr es nur als Spaß meintet, muss euch klar sein, dass es Luca verletzt.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Die zwei sind erst ruhig, geben aber nach kurzer Zeit nach.",
                                                    next: {
                                                        dialogType: DialogType.NPCDialog,
                                                        speaker: "Alex",
                                                        emotion: Emotion.sad,
                                                        text: "Du hast ja recht.",
                                                        next: {
                                                            dialogType: DialogType.NPCDialog,
                                                            speaker: "Steve",
                                                            emotion: Emotion.sad,
                                                            text: "Es tut uns leid.",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Du hast die Situation so gut wie möglich gemeistert."
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }
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
