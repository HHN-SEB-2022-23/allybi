import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const sexualitaet: Chapter = {
    title: "Homosexualität",
    tags: [Tag.sexualitaet],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du studierst an einer Hochschule und hörst, wie ein Kommilitone über einen schwulen Mitstudenten (Lee) redet, welcher in deiner Lerngruppe ist. Er sagt, dass das unnatürlich sei. Du überlegst, was du tun sollst.",
        next: {
            dialogType: DialogType.PlayerOptionDialog,
            choices: [
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du sprichst den Kommilitonen an und sagst, dass du gerne mit ihm reden würdest, um auf dieses Gespräch einzugehen.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Ihr geht an einen ruhigen Ort, um euch zu unterhalten.",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Ich sage ihm, dass diese Aussage nicht in Ordnung war und bitte ihn zukünftig nachzudenken, bevor er solche Äußerungen tätigt.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Solche Aussagen sind nicht okay. Hast du dir schonmal darüber Gedanken gemacht, wie sich Lee bei solchen Kommentaren fühlt? Denk doch nächstes mal bitte darüber nach, wie sich deine Äußerungen sich auf andere auswirken könnten, bevor du diese tätigst.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Er stimmt mir etwas widerwillig zu, aber man merkt ihm an, dass er weiterhin gegenüber Lee voreingenommen ist.",
                                        },

                                    },
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Ich kläre ihn allgemein über Sexualitäten auf und lade den Kommilitonen zu einem Treffen meiner Lerngruppe ein, damit er sich selbst ein Bild von Lee machen kann.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Homosexualität ist nicht unnatürlich. Es gibt auch viele Tierarten bei denen gleichgeschlechtliche Pärchen vorkommen. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, sondern ihn erstmal persönlich kennenlernen, bevor du dir ein Bild über ihn machst.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Er zögert, denkt aber über meinen Vorschlag nach. Am nächsten Tag kommt er auf mich zu und nimmt meine Einladung an. Bei dem Treffen ist er anfangs zurückhaltend, jedoch stellt sich nach ein paar Stunden heraus, dass er und Lee viele Gemeinsamkeiten haben und sie werden nach einigen Wochen sogar Freunde.",
                                        },
                                    },
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Ich kläre ihn allgemein über Sexualitäten auf, erläutere warum Homosexualität auch natürlich ist und bitte ihn zukünftig nachzudenken, bevor er solche Äußerungen tätigt.",
                                    next: {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Homosexualität ist nicht unnatürlich. Es gibt auch viele Tierarten bei denen gleichgeschlechtliche Pärchen vorkommen. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, sondern ihn erstmal persönlich kennenlernen, bevor du dir ein Bild über ihn machst.",
                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Er wirkt skeptisch, aber scheint über meine Worte nachzudenken. In den nächsten Wochen merkt man, dass sein Verhalten sich bessert und er das Gesagte etwas verinnerlicht und sein voriges Verhalten hinterfragt hat.",
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Du denkst, dass du keinen Einfluss auf seine Meinung haben wirst und verlässt den Saal.",
                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "n den nächsten Tagen fallen noch öfter solche Bemerkungen und du merkst bei den Treffen der Lerngruppe, dass sich Lees Gemütszustand verschlechtert hat.",
                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Ich mache weiterhin nichts, da ich weiterhin der Meinung bin, dass ich seine Meinung nicht ändern kann.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "In den folgenden Wochen fallen weitere ähnliche Kommentare von dem Kommilitonen. Lee fühlt sich nicht wohl dabei und versucht, ihm aus dem Weg zu gehen.",
                                    },
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "Ich gehe auf den anderen Kommilitonen zu, um mit ihm über sein Verhalten zu reden.",
                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Nach der Vorlesung treffen wir uns in einer ruhigen Ecke, um uns zu unterhalten.",
                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Ich kläre ihn allgemein über Sexualitäten auf und lade den Kommilitonen zu einem Treffen meiner Lerngruppe ein, damit er sich selbst ein Bild von dem Mitstudenten machen kann.",
                                                    next: {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Homosexualität ist nicht unnatürlich. Es gibt auch viele Tierarten bei denen gleichgeschlechtliche Pärchen vorkommen. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, sondern ihn erstmal persönlich kennenlernen, bevor du dir ein Bild über ihn machst.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Er zögert, denkt aber über meinen Vorschlag nach. Am nächsten Tag kommt er auf mich zu und nimmt meine Einladung an. Bei dem Treffen ist er anfangs zurückhaltend, jedoch stellt sich nach ein paar Stunden heraus, dass er und Lee viele Gemeinsamkeiten haben und sie werden nach einigen Wochen sogar Freunde.",
                                                        },
                                                    },
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Ich sage ihm, dass diese Aussage nicht in Ordnung war und bitte ihn zukünftig nachzudenken, bevor er solche Äußerungen tätigt.",
                                                    next: {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Solche Aussagen sind nicht okay. Hast du dir schonmal darüber Gedanken gemacht, wie sich Lee bei solchen Kommentaren fühlt? Denk doch nächstes mal bitte darüber nach, wie sich deine Äußerungen sich auf andere auswirken könnten bevor du diese tätigst.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Er stimmt mir etwas widerwillig zu, aber man merkt ihm an, dass er weiterhin gegenüber Lee voreingenommen ist.",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Ich merke, dass es Lee etwas besser geht, seit die Kommentare weniger wurden. Jedoch belastet ihn der Vorfall immer noch.",
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Ich kläre ihn allgemein über Sexualitäten auf, erläutere warum Homosexualität auch natürlich ist und bitte ihn zukünftig nachzudenken, bevor er solche Äußerungen tätigt.",
                                                    next: {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Homosexualität ist nicht unnatürlich. Es gibt auch viele Tierarten bei denen gleichgeschlechtliche Pärchen vorkommen. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, sondern ihn erstmal persönlich kennenlernen, bevor du dir ein Bild über ihn machst.",
                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Er wirkt skeptisch, aber scheint über meine Worte nachzudenken. In den nächsten Wochen merkt man, dass sein Verhalten sich bessert und er das Gesagte etwas verinnerlicht und sein voriges Verhalten hinterfragt hat.",
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
                },
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "Ich kläre ihn allgemein über Sexualitäten auf und lade den Kommilitonen zu einem Treffen meiner Lerngruppe ein, damit er sich selbst ein Bild von dem Mitstudenten machen kann.",
                    next: {
                        dialogType: DialogType.PlayerDialog,
                        text: "Homosexualität ist nicht unnatürlich. Es gibt auch viele Tierarten bei denen gleichgeschlechtliche Pärchen vorkommen. Außerdem hat die sexuelle Orientierung keinen Einfluss auf den Charakter, daher solltest du Lee nicht nach dieser beurteilen, sondern ihn erstmal persönlich kennenlernen, bevor du dir ein Bild über ihn machst.",
                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Er zögert, denkt aber über meinen Vorschlag nach. Am nächsten Tag kommt er auf mich zu und nimmt meine Einladung an. Bei dem Treffen ist er anfangs zurückhaltend, jedoch stellt sich nach ein paar Stunden heraus, dass er und Lee viele Gemeinsamkeiten haben und sie werden nach einigen Wochen sogar Freunde.",
                        },
                    },
                },
            ],
        },
    },
}
