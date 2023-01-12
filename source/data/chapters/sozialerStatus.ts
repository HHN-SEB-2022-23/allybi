/* eslint-disable max-len */
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"

export const sozialerStatus: Chapter = {
    "title": "Die 8 Uhr Vorlesung",
    "tags": [],
    "headDialog": {
        dialogType: DialogType.NarratorDialog,
        "text": "Nach einer entspannten 8:00 Uhr Vorlesung begibst du dich auf den Hof um etwas zu essen. Du hörst wie 2 deiner Kommilitonen einem dritten sagen, dass er wenig Hoffnung haben sollte sein Studium zu bestehen, da seine Eltern beide keine Akademiker sind und er zu wenig Geld hätte.",
        "next": {
            dialogType: DialogType.NPCDialog,
            "speaker": "Alex",
            "text": "Wie sollst du denn ordentlich studieren, wenn du nebenbei Arbeiten musst?",
            "next": {
                dialogType: DialogType.PlayerOptionDialog,
                "choices": [
                    {
                        dialogType: DialogType.PlayerDialog,
                        "text": "Jungs das ist ihm offensichtlich unangenehm schaltet mal ein Gang runter.",
                        "next": {
                            dialogType: DialogType.NarratorDialog,
                            "text": "Die 2 gucken dich verduzt an",
                            "next":{
                                dialogType: DialogType.NPCDialog,
                                "speaker": "Steve",
                                "text": "Wir machen doch nur Spaß, stimmts Luca?",
                                "next": {
                                    dialogType: DialogType.NarratorDialog,
                                    "text": "Luca sagt nichts und die anderen 2 fangen wieder an zu lachen",
                                    "next": {
                                        dialogType: DialogType.PlayerOptionDialog,
                                        "choices": [
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                "text": "Sollte ein Spaß nicht normalerweise Lustig sein?",
                                                "next": {
                                                    dialogType: DialogType.NPCDialog,
                                                    "speaker": "Alex",
                                                    "text": "Man braucht ein dickeres Fell um im Leben weiterzukommen!",
                                                    "next": {
                                                        dialogType: DialogType.NPCDialog,
                                                        "speaker": "Steve",
                                                        "text": "Man muss auch über sich selbst lachen können",
                                                        "next": {
                                                            dialogType: DialogType.PlayerOptionDialog,
                                                            "choices": [
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    "text": "Über das Leid anderer zu lachen findet ihr also lustig?",
                                                                    "next": {
                                                                        dialogType: DialogType.NPCDialog,
                                                                        "speaker": "Alex",
                                                                        "text": "Booooah!",
                                                                        "next":{
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            "text": "Die 2 sagen dir noch, dass du ein nerviger Spaßverderber bist, bevor sie unter lautem Stöhnen den Platz verlassen. Luca bedankt sich und ihr freundet euch an",
                                                                            "next": {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                "text": "Du bist die 2 losgeworden. Aber gab es vielleicht einen besseren Weg?",
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    "text": "Jeder 'seichte' Witz kann eine andere Person hart treffen. Manche mehr manche weniger.",
                                                                    "next":{
                                                                        dialogType: DialogType.NPCDialog,
                                                                        "speaker": "Steve",
                                                                        "text": "Er hat recht. Als du dich damals über meine Schwester lustig gemacht hast fand ich das garnicht komisch",
                                                                        "next":{
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            "text": "Er entschuldigt sich und geht",
                                                                            "next": {
                                                                                dialogType: DialogType.NPCDialog,
                                                                                "speaker": "Alex",
                                                                                "text": "Warte!",
                                                                                "next": {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    "text": "Du und Luca reden noch ein wenig miteinander und freundet euch an",
                                                                                    "next": {
                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                        "text": "Ein interessanter Ausgang",
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                "text": "Ah, dann ist es ja ok",
                                                "next": {
                                                    dialogType: DialogType.NarratorDialog,
                                                    "text": "Du beist wieder in dein Brötchen und isst weiter",
                                                    "next": {
                                                        dialogType: DialogType.NarratorDialog,
                                                        "text": "Die 2 machen sich weiter lustig bis Lucas irgendwann mit Tränen in den Augen geht",
                                                        "next": {
                                                            dialogType: DialogType.NarratorDialog,
                                                            "text": "In den darauffolgenden Tagen sieht du Luca selten bis garnicht auf dem Campus. Hättest du vielleich etwas daran ändern können",
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                "text": "Luca, lust auf Kaffee? Ich geb dir einen aus",
                                                "next": {
                                                    dialogType: DialogType.NarratorDialog,
                                                    "text": "Luca sieht glücklich aus",
                                                    "next": {
                                                        dialogType: DialogType.NPCDialog,
                                                        "speaker": "Luca",
                                                        "text": "Ja gerne!",
                                                        "next": {
                                                            dialogType: DialogType.NarratorDialog,
                                                            "text": "Ihr geht in die Cafeteria und trinkt zusammen einen Kaffee.",
                                                            "next": {
                                                                dialogType: DialogType.NarratorDialog,
                                                                "text": "Du hast die Situation gut gelöst und einen neuen Freund gewonnen!",
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                "text": "Sieht er glaube ich nicht so",
                                                "next": {
                                                    dialogType: DialogType.NarratorDialog,
                                                    "text": "Die 2 sagen, dass er ja erwachsen sei und für sich selbst sprechen soll",
                                                    "next": {
                                                        dialogType: DialogType.NPCDialog,
                                                        "speaker": "Luca",
                                                        "text": "Ich finde es wirklich nicht lustig",
                                                        "next": {
                                                            dialogType: DialogType.NarratorDialog,
                                                            "text": "Die 2 gucken geschockt",
                                                            "next": {
                                                                dialogType: DialogType.NarratorDialog,
                                                                "text": "Luca lädt dich auf einen Kaffee ein und du nimmst das angebot dankend an",
                                                                "next": {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    "text": "Du hast einen neuen Freund gewonnen",
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        "text": "Oh, hast du einen Job in der Nähe? Ich brauch auch noch was.",
                        "next": {
                            dialogType: DialogType.NarratorDialog,
                            "text": "Luca erzählt von der Bar in der er arbeitet und fragt ob er dich vermitteln soll",
                            "next": {
                                dialogType: DialogType.NPCDialog,
                                "speaker": "Alex",
                                "text": "Lassen die denn hier jeden rein?",
                                "next": {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    "choices": [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            "text": "Oh ja, wär super wenn du mich vermitteln könntest",
                                            "next": {
                                                dialogType: DialogType.NarratorDialog,
                                                "text": "Du und Luca tauschen Nummern aus",
                                                "next": {
                                                    dialogType: DialogType.NarratorDialog,
                                                    "text": "Die anderen 2 versuchen euch noch Dinge an den Kopf zu werfen aber ihr ignoriert sie, bis sie frustriert gehen",
                                                    "next": {
                                                        dialogType: DialogType.NarratorDialog,
                                                        "text": "Du hast geholfen und sogar einen neuen Job gefunden!",
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            "text": "Euch haben sie ja auch reingelassen",
                                            "next": {
                                                dialogType: DialogType.NarratorDialog,
                                                "text": "Die 2 gucken dich mit großen Augen an",
                                                "next": {
                                                    dialogType: DialogType.PlayerDialog,
                                                    "text": "Jetzt ist es nicht mehr so lustig oder?",
                                                    "next": {
                                                        dialogType: DialogType.NPCDialog,
                                                        "speaker": "Alex",
                                                        "text": "So etwas muss ich mir von jemandem wie dir nicht anhören!",
                                                        "next": {
                                                            dialogType: DialogType.NarratorDialog,
                                                            "text": "Die 2 gehen",
                                                            "next": {
                                                                dialogType: DialogType.NarratorDialog,
                                                                "text": "Luca bedankt sich für deine Hilfe",
                                                                "next": {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    "text": "Du bist die 2 durch Beleidigung losgeworden. War das wirklich richtig?",
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        "text": "*ich mache nichts*",
                        "next": {
                            dialogType: DialogType.NarratorDialog,
                            "text": "Du entscheidest dich weiter dein Brötchen zu essen. Nach ein paar weiteren Kommentaren der 2 steht Luca auf und geht, Tränen in den Augen",
                            "next": {
                                dialogType: DialogType.NarratorDialog,
                                "text": "In folgenden Tagen sieht du ihn selten bis garnicht auf dem Campus. Hättest du etwas daran ändern können"
                            }
                        }
                    },
                ]
            }
        }
    }
}
