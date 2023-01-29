/* eslint-disable max-len */
import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const aussehen: Chapter = {
    title: "Aussehen #Bodyshaming",
    tags: [Tag.aussehen],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du bist mit drei deiner Freundinnen (Amanda, Laura, Yuna) im Restaurant zum Essen verabredet. Auf den von Yuna bestellten Salat, reagieren die anderen beiden abwertend.",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: "Amanda",
            emotion: Emotion.neutral,
            text: "Bei deiner Figur solltest du wirklich mehr essen als einen Salat.",
            next: {
                dialogType: DialogType.NPCDialog,
                speaker: "Laura",
                emotion: Emotion.neutral,
                text: "Sie hat Recht. Du fällst uns ja noch vom Fleisch.",
                next: {
                    dialogType: DialogType.NarratorDialog,
                    text: "Mischst du dich in die Diskussion ein?",
                    next: {
                        dialogType: DialogType.PlayerOptionDialog,
                        choices: [
                            {
                                dialogType: DialogType.PlayerDialog,
                                text: "Die Diskussion geht dich nichts an. Deswegen hälst du dich raus.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Willst du dich wirklich raushalten?",
                                    next: {
                                        dialogType: DialogType.PlayerOptionDialog,
                                        choices: [
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Du bestellst mehr als du essen möchtest, mit dem Gedanken Yuna etwas abzugeben.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Yuna ist genervt von eurem Verhalten und wird eure Freundschaft nach diesem Abend überdenken.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre, sondern hast die Situation verschlimmert. Versuche unterützend einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                                    }
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Ich halte mich aus der Diskussion heraus.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche untersützend einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                                }
                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Du verteidigst Yuna.",
                                                next: {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Was Yuna isst, geht euch doch gar nichts an. Was ihr hier macht, ist Bodyshaming. Denkt ihr nicht, dass Yuna essen darf, worauf sie Lust hat, ohne solche Kommentare zu bekommen?",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Laura und Amanda sehen ein, dass ihre Äußerungen unangebracht waren und entschuldigen sich bei Yuna.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Gut gemacht! Durch dein Eingreifen ist den beiden klar geworden, dass ihre Kommentare verletzend sein können. Vielleicht werden sie, mit diesem Wissen, in Zukunft mehr auf ihre Aussagen achten."
                                                        }
                                                    }
                                                }
                                            },
                                        ]

                                    }
                                }
                            },
                            {
                                dialogType: DialogType.PlayerDialog,
                                text: "Du verteidigst Yuna.",
                                next: {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Was Yuna isst, geht euch doch gar nichts an. Was ihr hier macht, ist Bodyshaming. Denkt ihr nicht, dass Yuna essen darf, worauf sie Lust hat, ohne solche Kommentare zu bekommen?",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Laura und Amanda sehen ein, dass ihre Äußerungen unangebracht waren und entschuldigen sich bei Yuna.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Gut gemacht! Durch dein Eingreifen ist den beiden klar geworden, dass ihre Kommentare verletzend sein können. Vielleicht werden sie, mit diesem Wissen, in Zukunft mehr auf ihre Aussagen achten."
                                        }
                                    }
                                }
                            },
                            {
                                dialogType: DialogType.PlayerDialog,
                                text: "Du bestellst mehr als du essen möchtest, mit dem Gedanken Yuna etwas abzugeben.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Yuna ist genervt von eurem Verhalten und wird eure Freundschaft nach diesem Abend überdenken.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre, sondern hast die Situation verschlimmert. Versuche unterützend einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
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
