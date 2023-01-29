/* eslint-disable max-len */
import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const herkunft: Chapter = {
    title: "Ethnische Herkunft #Rassismus",
    tags: [Tag.herkunft],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Vor einigen Wochen ist euerer Fußballmannschaft ein neuer Mitspieler (Raphael) beigetreten, welcher ursprünglich aus Kamerun kommt. Während des Trainings hörst du einen Mitspieler (Juri) zu einem anderen sagen:",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: "Juri",
            emotion: Emotion.neutral,
            text: "Kein Wunder, dass der so schnell rennen kann. Der kommt ja aus Afrika.",
            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Was tust du?",
                next: {
                    dialogType: DialogType.PlayerOptionDialog,
                    choices: [
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du konfrontierst Juri mit seiner Aussage.",
                            next: {
                                dialogType: DialogType.PlayerDialog,
                                text: "Ich fand deine Äußerung gerade eben unter aller Sau. Was du gesagt hast, ist absolut respektlos und verletzend.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Dass er Widerspruch auf seine Äußerung bekommt, hatte Juri nicht erwartet. Mehr als ein genuscheltes \"Sorry\" hörst du nicht mehr von ihm für den Rest des Trainings. Auch an den kommenden Trainingstagen gibt es keine Probleme mehr.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Gut gemacht! Du hast dich für Raphael eingesetzt und somit Zivilcourage gezeigt.\nManchmal kann es in Situationen, in denen es eine*n Verantwortliche*n gibt, hilfreich sein diese*n über das Geschehen zu informieren und sie/ihn bitten einzugreifen. Manchmal kann es aber auch besser sein, die Person direkt zu konfrontieren, abhängig von der Situation."
                                    }
                                }
                            }
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du gehst zu eurem Trainer und berichtest ihm, was vorgefallen ist.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Du machst dich auf den Weg zum Trainer, um ihm von Juris Aussage zu berichten und bittest ihn solche Äußerungen zu unterbinden. Der Trainer sucht unmittelbar danach ein Gespräch mit Juri.",
                                next: {
                                    dialogType: DialogType.NarratorDialog,
                                    text: "Von dem Gespräch selbst bekommst du nichts mit. Der Trainer kommt jedoch nach dem Training auf dich zu, dankt dir für deinen Einsatz und versichert dir, dass soetwas in seinem Training nicht geduldet wird.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Gut gemacht! Du hast dich für Raphael eingesetzt und somit Zivilcourage gezeigt.\nIn Situationen, in denen es eine*n Verantwortliche*n gibt, ist oft hilfreich diese*n über das Geschehen zu informieren und sie/ihn bitten einzugreifen."
                                    }
                                }
                            }
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du ignorierst die Aussage.",
                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Willst du die Aussage wirklich ignorieren?",
                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du ignorierst die Aussage.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Game Over\nDu hast nicht geholfen, wenn es nötig gewesen wäre. Versuche einzuschreiten, wenn du mitbekommst, dass jemand diskriminiert wird. Wenn du dich nicht selbst traust, kannst du auch auf umstehende Personen zugehen und um Hilfe bitten.\nDurch Zivilcourage kannst du die Welt für mindestens eine Person ein bisschen besser machen."
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du konfrontierst Juri mit seiner Aussage.",
                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Ich fand deine Äußerung gerade eben unter aller Sau. Was du gesagt hast, ist absolut respektlos und verletzend.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Dass er Widerspruch auf seine Äußerung bekommt, hatte Juri nicht erwartet. Mehr als ein genuscheltes \"Sorry\" hörst du nicht mehr von ihm für den Rest des Trainings. Auch an den kommenden Trainingstagen gibt es keine Probleme mehr.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Gut gemacht! Du hast dich für Raphael eingesetzt und somit Zivilcourage gezeigt.\nManchmal kann es in Situationen, in denen es eine*n Verantwortliche*n gibt, hilfreich sein diese*n über das Geschehen zu informieren und sie/ihn bitten einzugreifen. Manchmal kann es aber auch besser sein, die Person direkt zu konfrontieren, abhängig von der Situation."
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du gehst zu eurem Trainer und berichtest ihm, was vorgefallen ist.",
                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Du machst dich auf den Weg zum Trainer, um ihm von Juris Aussage zu berichten und bittest ihn solche Äußerungen zu unterbinden. Der Trainer sucht unmittelbar danach ein Gespräch mit Juri.",
                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Von dem Gespräch selbst bekommst du nichts mit. Der Trainer kommt jedoch nach dem Training auf dich zu, dankt dir für deinen Einsatz und versichert dir, dass soetwas in seinem Training nicht geduldet wird.",
                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Gut gemacht! Du hast dich für Raphael eingesetzt und somit Zivilcourage gezeigt.\nIn Situationen, in denen es eine*n Verantwortliche*n gibt, ist oft hilfreich diese*n über das Geschehen zu informieren und sie/ihn bitten einzugreifen."
                                                    }
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
