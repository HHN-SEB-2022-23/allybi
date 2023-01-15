/* eslint-disable max-len */
import { Emotion } from "../../components/Avatar"
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

const Freundin = "Freundin"
const DuenneFreundin = "Dünne Freundin"
export const aussehen: Chapter = {
    title: "Im Restaurant",
    tags: [Tag.diskriminierungstyp1],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du bist mit deinen Freundinnen im Restaurant zum Essen verabredet. Beim Bestellen merkst du wie abwertend deine Freunde auf den bestellten Salat deiner Freundin regieren.",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: Freundin,
            emotion: Emotion.neutral,
            text: "So dünn wie du bist, solltest du wirklich mehr als einen Salat essen!",

            next: {
                dialogType: DialogType.PlayerOptionDialog,
                choices: [
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Du stimmst zu",

                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Du stimmst deinen Freundinnen zu. Deine eine Freundin war wirklich die Dünnste aus der Gruppe und das sie sich so selektiv ernährte verlief nicht zu ihrem Gunsten. Das sich deine Freundin unwohl fühlte wurde dabei von deiner Gruppe nicht beachtet.",

                            next: {
                                dialogType: DialogType.NPCDialog,
                                speaker: Freundin,
                                emotion: Emotion.neutral,
                                text: "Bestell dir am besten was füllendes!",

                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "\"Die haben hier auch Hamburger.\"",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "entgegnest du lachend. Deine Freundin meinte dazu nur, dass sie Hamburger nicht mag und das ein Salat wirklich für sie reicht. Deine Freunde schenkten ihr keine Beachtung, was deine Freundin ein wenig ärgerte. Die sinkende Laune deiner Freundin fällt dir als einzige auf.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du ignorierst es. Immerhin ist es ja nur ein Spaß",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Du findest die Reaktion deiner Freundin übertrieben. Immerhin meintet ihr es ja nur zu ihrem Wohlbefinden. Nach dem Essen hattet ihr vor nochmal in die Stadt zu gehen. Deine Freundin, die eigentlich gestern Abend zum Plan zu gestimmt hatte, lehnte ab. Sie müsse nachhause, ihre Mutter rufe sie. Nach diesem Tag merktest du wie sich deine Freundin immer mehr von eurer Freundesgruppe distanziert hatte. Der Grund war euch unbekannt.",
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du stehst zu deiner Freundin. Ihr seid schon ein wenig zu weit gegangen",

                                                            next:{
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Okay, es reicht langsam. Jeder sollte das essen worauf er Lust hat.\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Deine Freunde hörten endlich auf mit dem Theater und jeder konzentrierte sich auf seine Bestellung. Der restliche Tag verlief gut, auch wenn deine eine Freundin ein wenig stiller war als sonst.",
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du machst deine Freundinnen auf die Situation aufmerksam.",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Okay, es reicht langsam, Leute. Sie findet es nicht lustig\"",

                                                                next : {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: DuenneFreundin,
                                                                    emotion: Emotion.sad,
                                                                    text: "Ich kann an meinem Gewicht schwer was machen. Mein Körper verbrennt Kalorien echt schnell, also bringt es nichts mehr zu essen.",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "verteidigte sich deine Freundin. Deine Freunde kamen zur Einsicht und entschuldigten sich. Euch kam es nicht zu Gedanken wie sehr diese ganze Situation deine Freundin belastete. Ihr entschuldigt euch bei ihr aufrichtig. Von nun an wurden \"Witze\" dieser Art in eurer Freundesgruppe nicht mehr gemacht.",
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
                                            text: "Du greifst ein",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "\"Nun ist aber Schluss mit lustig, ich denke nicht das sie die Situation besonders witzig findet.\" ",

                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "warfst du in die Runde. Deine Freundin stimmte dir zu, sie fand es sogar ein wenig beleidigend.",

                                                    next: {
                                                        dialogType: DialogType.NPCDialog,
                                                        speaker: Freundin,
                                                        emotion: Emotion.sad,
                                                        text: "Aber es ist doch nur ein Witz gewesen! Andere würden töten um ihre Figur zu haben.",

                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "verteidigte sich einer deiner anderen Freundinnen. Die anderen stimmten zu kopfnickend. Sie scheinen nicht viel Verständnis dafür zu zeigen.",

                                                            next: {
                                                                dialogType: DialogType.PlayerOptionDialog,
                                                                choices: [
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "Kläre deine Freunde auf",

                                                                        next: {
                                                                            dialogType: DialogType.PlayerDialog,
                                                                            text: "\"Ein Witz auf kosten Anderer, ist alles andere als lustig\"",

                                                                            next: {
                                                                                dialogType: DialogType.NPCDialog,
                                                                                speaker: Freundin,
                                                                                emotion: Emotion.sad,
                                                                                text: "Aber wir meinten es doch nur gut",

                                                                                next: {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    text: "erwiderten die Anderen nun. Daraufhin erklärtest du, dass selbst wenn man es gut meint, solange die andere Person nicht damit einverstanden ist, man nicht weiter machen sollte. Deine Freundinnen sahen peinlich berührt aus und entschuldigten sich bei deiner einen Freunden. Du hattest einen guten Punkt genannt und merkten ihren Fehler. Das war das erste und letzte mal, dass sich so eine Situation abspielte.",
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "Lass deine Freundin es erklären",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Deine Freundin klärte eure Freundesgruppe auf. Sie fühle sich unwohl wenn das Thema Gewicht  aufkam und das zunehmen wegen ihrer Genetik so viel schwerer war als bei anderen. Deine Freunde kamen zur Einsicht und entschuldigten sich aufrichtig für ihr Fehlverhalten. Auch du entschuldigtest dich für die Hamburger Sache ganz am Anfang, das war wirklich unsensibel von dir. Der restliche Tag verging ohne weitere Probleme und ihr hattet euren Spaß als Freundesgruppe.",
                                                                        }
                                                                    },
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "Wechsel das Thema",

                                                                        next: {
                                                                            dialogType: DialogType.PlayerDialog,
                                                                            text: "\"Egal jetzt, lass uns einfach bestellen\"",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "meintest du. Du hattest keine Geduld für das hin und her diskutieren. Deine Freundin sah enttäuscht aus, sagte aber nichts dazu. Wegen dieser Entscheidung herrschte den ganzen Tag über eine sehr eigenartige Stimmung. Du bereutest deine Entscheidung. Hättest du vielleicht anders reagiert, wäre der Tag nicht für die Tonne gwesen.",
                                                                            }
                                                                        }
                                                                    }

                                                                ]
                                                            }
                                                        }
                                                    }
                                                }

                                            }

                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Dir fällt das Unwohlsein deiner Freundin auf. Du frägst nach.",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Deine Freundin senkte ihren Blick auf die Speisekarte. In ihrem Gesicht konntest du ihr Unwohlsein klar und deutlich ansehen. Du fragtest nach, ob sie was nerve.",

                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: DuenneFreundin,
                                                    emotion: Emotion.sad,
                                                    text: "Ich habe seit Tagen Lust auf einen herzhaften Salat und jetzt zwingt ihr mir irgendwas auf worauf ich gar keinen Bock habe.",

                                                    next: {
                                                        dialogType: DialogType.NPCDialog,
                                                        speaker: Freundin,
                                                        emotion: Emotion.neutral,
                                                        text: "Du musst halt ein wenig auf deine Ernährung achten. Wir meinen das doch nur zu deinem Guten",

                                                        next: {
                                                            dialogType: DialogType.PlayerOptionDialog,
                                                            choices: [
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Ihre Ernährung ist nicht unsere Angelegenheit\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "\"Ihre Ernährung und ihr Körperbau ist nicht unsere Angelegenheit.\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "meintest du nur. Deine Freundin lächelte dir dankbar zu. Deine Freundinnen stimmten dir zum Großteil zu, meinten aber noch das sie doch nur besorgt seien. Deine Freundin fühlte sich unwohl. Brennpunkt der Diskussion zu sein, war nicht gerade angenehm. Du und deine Freundin klärtet eure Freunde beim Essen auf, das der Körperbau deiner Freundin das Resultat von Genetik sei und nicht von Unterernährung. Richtung ende des Gespräches zeigte euer Freundeskreis volles Verständnis und entschuldigten sich aufrichtig. Es war nicht deren Ziel sich über Sie lustig zu machen. Der restliche Tag verging mit guter Stimmung. Deine Freundin bedankte sich kurz bei dir für die Hilfe, auch wenn du ganz am Anfang ein wenig Falsch reagiert hast.",
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du beobachtest die Situation",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Deine Freundin wirkte sichtlich genervt. Dein Freundeskreis benahm sich einfach nicht einsichtig. Du wolltest nichts mehr dazu beitragen, also war dein Blick auf die Speisekarte gerichtet. Deine Freundin beendete das Thema mit einem augenrollen und bestellte sich ihren Salat. Die Stimmung war trüb und das Essen verlief leise. Für den restlichen Tag hattet ihr eigentlich vorgeplant, aber wegen der Diskussion war jeder ein wenig missgelaunt und somit fiel der Tag ins Wasser. Hättest du diese Situation entgehen können?",

                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du stimmst deinen Freundinnen zu.",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Du stimmtest deinen Freundinnen zu. Sie war wirklich zu dünn. Deine Freundin war von den Meinungen komplett überwältigt und sagte zu dieser Thematik nichts mehr. Die Folge war, dass sich deine Freundin nach diesem Tag immer und immer mehr von eurer Freundesgruppe distanzierte bis es zum kompletten Kontaktabbruch kam. Wegen dieser Entscheidung hast du eine geschätzte Freundin verloren.",
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    ]
                                }
                            }
                        }

                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Du verteidigst sie",

                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "\"Hey lasst sie doch essen was sie will, wenn sie lust auf einen Salat hat ist das ja nicht schlimm.\"",

                            next: {
                                dialogType: DialogType.NPCDialog,
                                speaker: Freundin,
                                emotion: Emotion.neutral,
                                text: "Natürlich darf sie essen was sie will, aber so dünn wie sie ist sollte sie mal ein bisschen zunehmen oder? Ist ja nicht böse gemeint.",

                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Diskutier nicht weiter mit Ihnen",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "\"So dünn wie sie ist könnte man meinen sie bekommt zuhause überhaupt nichts zu essen\"",

                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "sagt eine Freundin und die anderen fangen zu lachen an. Die dünne Freundin wirkt  betrübt und sie scheint die Kommentare nicht wirklich lustig zu finden.",

                                                    next: {
                                                        dialogType: DialogType.PlayerOptionDialog,
                                                        choices: [
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Du Konfrontierst deine Freundinnen mit ihrem verhalten.",

                                                                next: {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Eure Kommentare sind ziemlich verletzend seht ihr nicht wie unangenehm ihr die Situation ist?\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "sagst du zu den Freundinnen. Erst jetzt bemerken sie das für das dünne Mädchen die Kommentare wohl nicht lustig waren sondern eher verletzend.",

                                                                        next: {
                                                                            dialogType: DialogType.NPCDialog,
                                                                            speaker: Freundin,
                                                                            emotion: Emotion.neutral,
                                                                            text: "Oh entschuldige wir wollten dich wirklich nicht verletzen, wir haben nur ein bisschen spaß gemacht.",

                                                                            next: {
                                                                                dialogType: DialogType.PlayerDialog,
                                                                                text: "Für euch war es vielleicht spaß aber für sie waren eure Kommentare wirklich unangebracht, in Zukunft solltet ihr mehr darauf achten was ihr sagt.",

                                                                                next: {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    text: "Die Freundinnen entschuldigen sich bei dem Dünnen Mädchen und versprechen ihr nächstes mal keine unbedachten Kommentare mehr abzugeben. Gut gemacht nicht nur haben die Freundinnen aufgehört weiter Kommentare zu dem dünnen Mädchen abzugeben sondern auch noch festgestellt das Ihre Worte sehr verletzend waren und achten in Zukunft mehr daruaf was sie sagen.",
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Du versuchst vom Thema abzulenken",

                                                                next:{
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Habt ihr schon den neuen Avatar gesehen der soll echt gut sein\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "sagst du um vom Thema abzulenken. Tatsächlich funktioniert es und die Freundinnen lasssen das dünne Mädchen jetzt in ruhe allerdings wirkt sie trotzdem geknickt und beim nächsten mal wird es wahrscheinlich die selbe Diskussion wieder geben, wäre es nicht besser die Freundinnen über ihr verletzendes verhalten aufzuklären dass so eine Situation nicht wieder vorkommt?",
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Du mischt dich weiterhin nicht ein",

                                                                next: {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: Freundin,
                                                                    emotion: Emotion.neutral,
                                                                    text: "\"Wenn der Wind draußen nacher immernoch so stark ist müssen wir sie festhalten das sie nicht davonfliegt\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "sagt eines der Mädchen und die anderen lachen wieder. Das dünne Mädchen scheint die Situation nicht mehr auszuhalten und sagt das sie auf Klo geht. Als sie an dir vorbeiläuft bist du dir sicher dass sie Tränen in den Augen hat. Das war wohl nicht die beste Entscheidung, hätte es nicht verhindert werden können das das dünne Mädchen unter Tränen vor der Situation flüchtet?",
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Sage Ihnen dass der Körperbau nicht nur am essen liegt sondern auch viel abhängig von den Genen ist",

                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "\"Der Körperbau ist nicht nur abhängig davon wie viel man isst, das ist euch schon klar oder? Da spielen noch viel mehr Faktoren mit rein. Manche können so viel essen wie sie wollen und nehmen nicht zu, dafür können sie nichts\"",

                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: Freundin,
                                                    emotion: Emotion.neutral,
                                                    text: "Ja schon aber so dünn wie sie ist isst sie doch bestimmt einfach zu wenig.",

                                                    next: {
                                                        dialogType: DialogType.PlayerOptionDialog,
                                                        choices: [
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Weiterhin versuchen ihnen klar zu machen das essen allein nicht den Körperbau bestimmt",

                                                                next: {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Hört mal manche Menschen haben einen sehr Schnellen Stoffwechsel wodurch sie nicht zunehmen können egal wie viel sie essen. Für deise Menschen ist es wirklich unglaublich lästig immer wieder Kommentare wie eure zu hören, da sie nicht zunehmen egal wie viel sie essen. Ihr solltet wirklich aufhören sie so zu bedrängen und sie essen lassen was sie will. Sie wird ja wohl besser wissen ob sie einen Salat möchte oder was anderes\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Die Freundinnen sehen ein das ihre Kommentare unangebracht waren und entschuldigen sich bei dem dünnen Mädchen. Somit kann sie ihren Salat bestellen und in ruhe essen ohne sich die ganze zeit Kommentare von den anderen anhören zu müssen, gut gelöst.",
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Es dabei belassen",

                                                                next: {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: Freundin,
                                                                    emotion: Emotion.happy,
                                                                    text: "\"Weißt du die Pizza hier ist wirklich lecker bestell dir doch lieber sowas\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Sichtlich bedrückt gibt das dünne Mädchen nach und bestellt sich eine Pizza anstatt dem Salat, obwohl es nicht so wirkt als ob sie das wirklich will. Leider wurde dem dünnen Mädhcne hier nicht wirklich geholfen, sodass sie am Ende sogar nachgegeben hat und sich etwas anderes bestellt hat. Da gibt es doch bestimmt eine bessere Lösung als das.",
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Sie darauf aufmerksam machen das Ihre aussagen die Freundin verletzen",

                                                                next: {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Und außerdem sind eure Kommentare für sie echt verletzend schaut doch mal wie Traurig sie aussieht. Ihr solltet euch wirklioch bei ihr entschuldigen und aufhören ihr vorschreiben zu wollen was sie essen soll.\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Die Freundinnen bemerken das ihre Kommentare dem dünnen Mädchen sichtlich zugesetzt haben.",

                                                                        next: {
                                                                            dialogType: DialogType.NPCDialog,
                                                                            speaker: Freundin,
                                                                            emotion: Emotion.sad,
                                                                            text: "Oh entschuldigung wir wollten dich nicht verletzen, das tut uns leid.",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "sagt eine der Freundinnen und die anderen entschuldigen sich auch. Gut gemacht die Freundinnen haben bemerkt das ihre Kommentare dass dünne Mädchen verletzt haben. In der Zukunf werden sie wohl mehr darauf achten was sie sagen.",
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }

                                                        ]
                                                    }
                                                }

                                            }

                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Beharre darauf, dass sie aufhören sollen, der Freundin vorschreiben zu wollen, was sie essen soll",

                                            next: {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "\"Jetzt hört doch mal auf ihr Dinge vorschreiben zu wollen, sie wird ja wohl selbst am besten entscheiden können was gut für sie ist.\"",

                                                next: {
                                                    dialogType: DialogType.NPCDialog,
                                                    speaker: Freundin,
                                                    emotion: Emotion.neutral,
                                                    text: "Ist ja schon gut kein grund so ernst zu werden. Wir machen doch nur ein bisschen spaß, da ist ja nichts dabei.",

                                                    next: {
                                                        dialogType: DialogType.PlayerOptionDialog,
                                                        choices: [
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Die situation dabei belassen",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Die Freundinnen haben zwar aufgehört mit ihren Kommentaren dafür ist die stimmung jetzt aber ziemlich bedrückt und beim nächsten mal wird es wahrscheinlich wieder genauso anfangen mit den Kommentaren über das dünne Mädchen. Was das wirklich die optimale Lösung?\"",
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Ihnen mitteilen das ihr \"Spaß\" nicht für alle lustig ist sondern verletzend",

                                                                next: {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "\"Sieht mir aber nicht so aus als ob sie dabei spaß hätte\"",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Den Freundinnen fällt auf das das dünne Mädchen ziemlich bedrückt wirkt, und ihre Kommentare sie wohl verletzt haben.",

                                                                        next: {
                                                                            dialogType: DialogType.NPCDialog,
                                                                            speaker: Freundin,
                                                                            emotion: Emotion.neutral,
                                                                            text: "Oh entschuldigung wenn wir dich verletzt haben das wollten wir wiklich nicht. Du kannst natürlich einen Salat bestellen wenn du das willst. Verzeih uns bitte wir haben nicht darüber nachgedacht das unsere Kommentare für dich sehr verletzend sein könnten.",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "Das dünne Mädchen nimmt die entschuldigung an und das Thema wird gewechselt. SIe lächelt dir danken zu. Gut gemacht du hast den Freundinnen ihr Fehlverhalten aufgezeigt und dem dünnen Mädchen geholfen.",
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "Zu der Freundin die mit den Augen gerollt hat sagen das sie doch lieber nach sich schauen soll, vor allem bei den Klamotten die sie trägt",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Mit wütendem Blick schaut sie dich an",

                                                                    next: {
                                                                        dialogType: DialogType.NPCDialog,
                                                                        speaker: Freundin,
                                                                        emotion: Emotion.sad,
                                                                        text: "Sag mal spinnst du? Vor allem du solltest nicht über die Klamotten anderer lästern mit deiner Oma Kleidung, am besten du gehst jetzt oder ich sag dir mal wirklich meine Meinung.",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Die anderen Freundinnen stimmen zu das du jetzt gehen solltest und dein Verhalten nicht in Ordnung war. Dir bleibt keine wahl außer das Restaurant zu verlassen. Auf Konfrontation zu gehen war nicht der richtige weg. Nicht nur warst du gemein zu deiner Freundin und alle sind sauer auf dich, sondern wurde dem dünnen Mädchen dadurch auch nicht geholfen. Du solltest es mit einer anderen herangehensweise probieren.",
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }

                                    ]
                                }
                            }
                        }
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Du versuchst deine Freunde aufzuklären",

                        next: {
                            dialogType: DialogType.NarratorDialog,
                            text: "Die Stimmung in der Freundesgruppe sank. Deine Freundin war nicht gerade glücklich mit dem unsensiblen Kommentaren deiner Freunde. Du wolltest es nicht zur Eskalation kommen lassen, also versuchtest du deine Freunde über das Thema Bodyshaming aufzuklären. Deine Freundinnen reagierten unbeeindruckt. Das Thema Bodyshaming sei ja nur für die die mit Übergewicht kämpfen müssen.",

                            next: {
                                dialogType: DialogType.PlayerOptionDialog,
                                choices: [
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "\"Bodyshaming geht in beide Richtungen. Dick und Dünn. Esse weniger, esse mehr. Im Endeffekt hat es doch die ein und die selbe Bedeutung.\"",

                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "war deine Antwort auf die Aussage deiner Freundin. Deine Freunde stimmten dir vereinzelt zu. Es war schwer eine so offensichtliche Tatsache abzulehnen. Einer deiner Freunde erwähnte dazu nur, dass Gewicht zu nehmen so einfach war für sie und wir alle doch nicht so übertreiben sollen.",

                                            next: {
                                                dialogType: DialogType.PlayerOptionDialog,
                                                choices: [
                                                    {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "\"Zeig dich doch nicht so uneinsichtig. Deine Genetik spielt da auch noch eine Rolle.\"",

                                                        next: {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Zeig dich doch nicht so uneinsichtig. Deine Genetik spielt da auch noch eine Rolle. \".  \"Nur weil dein Stoffwechsel so funktioniert wie er sollte, heißt das nicht, dass das auch bei anderen so der Fall ist.\" ",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Du wolltest es dir nicht anmerken lassen, aber die Reaktion deiner Freundin nervte dich schon ein wenig, Deine dünne Freundin stimmte dir zu. Deine eine Freundin  verzog ein wenig ihr Gesicht, abe sagte daraufhin nichts mehr und blieb still. Das Essen verging mehr oder weniger gut. Am Ende wurde darauf verzichtet noch kurz in die Stadt zu gehen. Der Tag verging seltsam, aber wenigstens kam es nicht zu einer großen Konfrontation.",
                                                            }
                                                        }
                                                    },
                                                    {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Deine Freundin sollte nicht über Sachen sprechen, wenn sie das nötige Wissen nicht besitzt.",

                                                        next:{
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Und genau das sagtest du ihr auch ins Gesicht. Die Andeutung nicht gebildet zu sein, hatte deiner Freundin nicht unbedingt gefallen. Es kam zu einer hitzigen Diskussion, welche bald von deinen anderen Freundinnen unterbrochen wurde. Deine Freundesgruppe wirkte sehr genervt und meinten nur wenn wir uns doch streiten wollen, sollen wir das bitte doch in deren Abwesenheit machen.  Für den Rest des Abend herrschte Stille, bis ihr euch auflösten und jeder Nachhause ging. Der Abend war für die Tonne und deine Reaktion zu provokant. Hätte es einen anderen Weg gegeben, diese Situation friedlich zu lösen?",
                                                        }
                                                    },
                                                    {
                                                        dialogType: DialogType.PlayerDialog,
                                                        text: "Du überlässt deiner Freundin das Reden.",

                                                        next: {
                                                            dialogType: DialogType.NarratorDialog,
                                                            text: "Du entschließt dich zurück zu halten. Deine Freundin hat es verdient, alles auch mal von ihrer Sicht aus zu teilen. Sie erzählte, wie unwohl sie sich jedes mal fühle, wenn das Thema auf ihr Gewicht falle. Sie versuche ja an Gewicht zu gewinnen, was nicht so ganz funktioniere wegen ihrem Stoffwechsels. Deine Freundinnen wirkten peinlich berührt, beschämt das sich ihre Freundin unwohl in deren Nähe fühlte. Sie wirkten verständnisvoll und entschuldigten sich einfühlsam. Deine Freundin wirkte erleichtert. Glücklich das die Situation sich dem Ende neigte. Der Rest des Tages verlief spaßig und ohne das sich jemand unwohl fühlte.",

                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Bitte deine Freundin es aus ihrer Perspektive zu erzählen",

                                        next: {
                                            dialogType: DialogType.NarratorDialog,
                                            text: "Du bittest deine Freundin die anderen aufzuklären. Sie erzählt wie unwohl sie sich gefühlt habe. Und das Gewicht zunehmen eines ihrer wunden Punkte ist, da sie solche Probleme habe mit dem zunehmen, egal was und wie viel sie isst.  Überrascht zeigen sich die Freundinnen einsichtiger und entschuldigen sich bei ihr. Eine wirft allerdings ein.",

                                            next: {
                                                dialogType: DialogType.NPCDialog,
                                                speaker: Freundin,
                                                emotion: Emotion.neutral,
                                                text: "Ich würde auch gern essen können was ich will und nicht zunehmen, du hast es ja richtig gut.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Sag mal gehts noch? Du bist echt unsensibel\"",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "sagst du zu ihr. SIe rollt mit den Augen und sagt können wir jetzt endlich bestellen ich hab echt hunger. Das Thema ist damit zwar beendet und es wird nicht mehr darüber Diskutiert ob die Freundin einen Salat essen darf, du hast aber nicht das gefühl das alle verstanden haben wie schwer es für die Freundin ist wenn immer solche Kommentare gemacht werden.",
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Dein Kommentar war jetzt wirklich unpassend siehst du nicht das es sie bedrückt ?\"",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Als die Freundin das dünne Mädchen anschaut merkt sie das ihr Kommentar sie wohl wirklich verletzt hat und entschuldigt sich sofort dafür bei ihr unbedacht so etwas gesagt zu haben. Somit ist die Diskussion über das Themac endlich beendet und ihr könt in ruhe essen bestellen und die restliche zeit genießen. Ebenso hast du das gefühl das deine Freundinnen in zukunft mehr darauf achten was sie in solch einer Situation sagen.",
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Ich glaube nicht das du das selbe haben willst. Dann würdest du jetzt hier sitzen und mit anderen disskutieren ob du einen Salat essen darfst\"",

                                                            next: {
                                                                dialogType: DialogType.NPCDialog,
                                                                speaker: Freundin,
                                                                emotion: Emotion.neutral,
                                                                text: "\"Hm stimmt. Daran habe ich nicht gedacht\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "antwortet die Freundin und entschuldigt isch aufrichtig bei dem dünnen Mädchen. Ihr bestellt euer essen und das dünne Mädchen lächelt dir herzlich zu. Du hast nicht nur die Diskussion darüber beendet ob sie einen Salat essen darf sondern auch noch deine Freundinnen dafür sensibilisiert das solche Kommentare für manche sehr verletzend sein können wenn sie sowieso schon mit der Thematik kämpfen. Sehr gut gemacht.",
                                                                }
                                                            }
                                                        }

                                                    ]
                                                }
                                            }

                                        }

                                    },
                                    {
                                        dialogType: DialogType.PlayerDialog,
                                        text: "Lass deine Freunde unter sich diskutieren ",

                                        next: {
                                            dialogType: DialogType.NPCDialog,
                                            speaker: Freundin,
                                            emotion: Emotion.neutral,
                                            text: "\"Ja, ich verstehe wie du das meinst, aber es ist doch schlimmer dick zu sein anstatt dünn. Viele Frauen wünschen sich deine Figur.\"",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "warf deine Freundin in die Runde. Das dünne Mädchen wirkte sehr verletzt durch die Aussage.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du versuchst das Thema zu wechseln",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Meint ihr nicht, dass wir genug diskutiert haben? Lasst uns endlich essen.\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "meintest du. deine Freundesgruppe stimmte dir zu. Deine dünne Freundin wirkte einerseits erleichtert, andererseits genervt, dass deine andere Freundin nicht zur Einsicht kam. Diese Diskussion veränderte die  Dynamik in eurer Gruppe. Da sich diese Situation mehr als einmal wiederholen wird und deine dünne Freundin als Resultat sich immer mehr von eurer Gruppe distanziert, ist nicht ganz optimal. Hättest du vielleicht einer der anderen Optionen wählen sollen?",
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du enthältst dich weiterhin",

                                                            next: {
                                                                dialogType: DialogType.NPCDialog,
                                                                speaker: DuenneFreundin,
                                                                emotion: Emotion.sad,
                                                                text: "\"Na gut bestellt ich mir halt eine Pizza\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "sagt sie sichtlich genervt. Daraufhin bestellt ihr alle und das Thema ist beendet. War das wirklich die optimale Lösung? Immerhin hat die Freundin nachgegeben und etwas bestellt was sie eigentlich gar nicht wollte nur um endlich ruhe zu haben.  Außerdem wird die Diskussion beim nächsten mal vermutlich wieder von vorne beginnen, somit ist dem dünnen Mädchen nicht wirklich geholfen.",
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du versucht deiner Freundin klarzumachen, wie unsensibel ihre Aussage war",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Das ist aber nicht wirklich sensibel was du da sagst. Stell dir mal vor du hast ein Problem was dich bedrückt und dann diskutieren andere mit dir auch noch darüber und sagen dann ja oke das ist zwar ein Problem aber andere haben es noch schlimmer. Das würde dich auch verletzen oder?\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Deine Freundin zeigt sich einsichtig und entschuldigt sich bei dem Dünnen Mädchen. Ihr war nicht klar das dass Thema für sie so schwierig ist und dass ihre Kommentare so verletzend waren sagt sie. Somit hast du deine Freundinnen für das Thema sensibilisiert  und in zukunft wird das dünne Mädchen nicht mehr mit den anderen Diskutieren müssen was sie bestellt. Sehr gut gemacht.",
                                                                }
                                                            }
                                                        }
                                                    ]
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
}
