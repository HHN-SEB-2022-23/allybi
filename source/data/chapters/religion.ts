/* eslint-disable max-len */
import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

const AeltererHerr = "Älterer Herr"
export const religion: Chapter = {
    title: "Diskriminierung in der Bahn",
    tags: [Tag.diskriminierungstyp1],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Du beobachtest in der Bahn, dass ein älterer Herr zu einem jungen Mädchen mit Kopftuch sagt.",

        next: {
            dialogType: DialogType.NPCDialog,
            speaker: AeltererHerr,
            text: "Geh zurück, wo du hergekommen bist!",

            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Die anderen Fahrgäste schauen der Situation gespannt zu und unternehmen aber nichts. Das junge Mädchen, eingeschüchtert von der Situation, traut sich nicht etwas zu sagen.",

                next: {
                    dialogType: DialogType.PlayerOptionDialog,
                    choices: [
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du guckst zu und schüttelst den Kopf.",

                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Da sich niemand in die Situation eingemischt hat, fährt der Mann mit seinen Vorwürfen und Vorurteilen fort. ",

                                next: {
                                    dialogType: DialogType.NPCDialog,
                                    speaker: AeltererHerr,
                                    text: "Ihr Islamisten nehmt uns Deutschen schamlos die Arbeit weg, schämen solltet ihr euch!",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Überfordert mit der Situation starrt das junge Mädchen wortlos auf den Boden. Einige Fahrgäste schauen jetzt weg, da ihnen die Situation zu unangenehm wird.",
                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du willst nicht in die Situation mit reingezogen werden und bleibst weiterhin leise.",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Da sich erneut niemand einmischt, verändert sich die Lage des kopftuchtragenden Mädchens nicht. Der ältere Mann wirft rein: ",

                                                        next: {
                                                            dialogType: DialogType.NPCDialog,
                                                            speaker: AeltererHerr,
                                                            text: "Früher war alles besser, da gab es noch Ordnung in Deutschland.",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Dem jungen Mädchen wird alles zu viel und bricht in Tränen aus.",
                                                                next: {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: AeltererHerr,
                                                                    text: "Jetzt darf man hier nicht mal seine Meinung sagen, oder was?",
                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Reagierte der Mann grimmig auf das Weinen des muslimischen Mädchen.",
                                                                        next: {
                                                                            dialogType: DialogType.PlayerOptionDialog,
                                                                            choices: [
                                                                                {
                                                                                    dialogType: DialogType.PlayerDialog,
                                                                                    text: "Du stehst zu deiner Entscheidung und unternimmst nichts dagegen.",

                                                                                    next: {
                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                        text: "Beim nächsten Halt des Zuges steigt das in Tränen aufgelöste Mädchen aus. Der Mann wirkt sehr zufrieden mit seiner Handlung. Da du dich nicht in die Situation eingemischt hast, plagen dich nun die Schuldgefühle. Hättest du die Situation anders angehen können?",
                                                                                    }
                                                                                },
                                                                                {
                                                                                    dialogType: DialogType.PlayerDialog,
                                                                                    text: "Du setzt dich mit dem Mädchen weg von dem Mann.",

                                                                                    next:{
                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                        text: "Dir geht die Situation zu weit und du weißt, dass du etwas dagegen unternehmen musst. Du gehst auf das Mädchen zu und frägst ob sie sich vielleicht mit dir weg setzen wollen würde. Das junge Mädchen, erleichtert, dass sich endlich jemand in die Situation eingreift, stimmt zu. Ihr beide setzt euch in die hintersten Reihen des Zuges, weit weg von dem muslimen feindlichen Mann. Der Mann schreit euch noch anstößige Sprüche hinterher. Durch dein Eingreifen hast du Sie zwar aus der Situation gebracht, aber das verweinte Mädchen an deiner Seite zeigt dir, dass man dieser Situation auch schon früher hätte entgehen können.",
                                                                                    }
                                                                                },
                                                                                {
                                                                                    dialogType: DialogType.PlayerDialog,
                                                                                    text: "Du mischt dich in die Situation ein",

                                                                                    next: {
                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                        text: "Du entscheidest dich einzugreifen, da der Mann mit den Vorwürfen nicht aufhört.",

                                                                                        next: {
                                                                                            dialogType: DialogType.PlayerDialog,
                                                                                            text: "Es reicht jetzt. Das Mädchen weint doch schon!",

                                                                                            next: {
                                                                                                dialogType: DialogType.NarratorDialog,
                                                                                                text: "Der Mann,der mit dem Einwurf nicht gerechnet hatte, erwidert nur:",

                                                                                                next: {
                                                                                                    dialogType: DialogType.NPCDialog,
                                                                                                    speaker: AeltererHerr,
                                                                                                    text: "Man würd doch noch seine Meinung sagen dürfen!",

                                                                                                    next: {
                                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                                        text: "Das junge Mädchen schenkte dir einen dankenden Blick. Für den Rest der Zugfahrt blieb der ältere Herr leise. Gelegentlich hörte man, wie er leise vor sich hin murmelte. Durch dein Eingreifen wurde die Situation beendet. Für den Rest des Tages bleiben deine Gedanken an dieser Situation hängen. Hätte man diese Situation vielleicht besser handhaben können?",
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
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Dir geht es langsam zu weit und konfrontierst den Mann",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Da der Mann langsam beleidigend wird, entscheidest du dich, den Mann zur Rede zu stellen.",

                                                        next: {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "In Deutschland haben wir Religionsfreiheit. Wer sind Sie, dass sie dem Mädchen vorschreiben wollen, welche Religion sie ausleben darf?",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Der ältere Mann schaut dich verdutzt an und frägt dich wieso du dich einmischt, da er ja nur seine Meinung sagt.",
                                                                next: {
                                                                    dialogType: DialogType.PlayerOptionDialog,
                                                                    choices: [
                                                                        {
                                                                            dialogType: DialogType.PlayerDialog,
                                                                            text: "“Das ist keine Meinung, sondern eine diskriminierende Aussage!”",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "entgegnest du ihm. Daraufhin erwiderte der älterer Herr:",

                                                                                next: {
                                                                                    dialogType: DialogType.NPCDialog,
                                                                                    speaker: AeltererHerr,
                                                                                    text: "So war das doch garnicht gemeint! Für euch jungen Menschen ist heutzutage doch alles eine Beleidigung!",

                                                                                    next: {
                                                                                        dialogType: DialogType.NarratorDialog,
                                                                                        text: "Nach dieser Konfrontation entschied sich der Mann für den Rest der Fahrt leise zu sein. Das Mädchen mit dem Kopftuch wirkte um einigest erleichtert, dass jemand ihr beigestanden ist und die Situation ihr Ende fand. Das Mädchen mit dem Kopftuch bedankte sich beim Aussteigen für deine Hilfe.",
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            dialogType: DialogType.PlayerDialog,
                                                                            text: "“Hier hat jeder das Recht seine Religion auszuleben, egal ob es sich hierbei um das Christentum,Judentum oder Islam handelt!”",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "entgegnest du ihm. Daraufhin erwidert der ältere Herr:",

                                                                                next: {
                                                                                    dialogType: DialogType.NPCDialog,
                                                                                    speaker: AeltererHerr,
                                                                                    text: "Ist mir doch egal, welcher Religion du folgst. Zwing mir deinen Allah aber bloß nicht auf.",

                                                                                    next: {
                                                                                        dialogType: DialogType.PlayerDialog,
                                                                                        text: "Nur weil in der Bahn jemand ein Kopftuch trägt, heißt das ja bei langem noch nicht das dir jemand die Religion aufzwingt",

                                                                                        next: {
                                                                                            dialogType: DialogType.NarratorDialog,
                                                                                            text: "Der grimmig wirkende Mann schnaufte als Antwort nur und weigerte sich für den Rest der Fahrt irgendwas zu sagen. Das Mädchen mit dem Kopftuch bedankte sich beim Aussteigen für deine Hilfe.",
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            dialogType: DialogType.PlayerDialog,
                                                                            text: "Das Auftreten des Mannes verunsichert dich, weswegen du dich lieber nicht mehr einmischt",

                                                                            next: {
                                                                                dialogType: DialogType.NarratorDialog,
                                                                                text: "Für den Rest der Fahrt bliebst du wie gewohnt leise. Da sich niemand dem Mann entgegenstellte, sah er sich in seiner Handlung gerechtfertigt. Nach kurzer Zeit fing er wieder an, das kopftuchtragende Mädchen mit diskriminierenden Sprüchen zu kommentieren. Beim nächsten Halt der Bahn stieg das Mädchen, beinahe raus rennend, aus. War dies die richtige Entscheidung?",
                                                                            }
                                                                        }

                                                                    ]
                                                                }
                                                            }
                                                        }

                                                    }

                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "Du drohst dem Mann mit einem Polizeianruf",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "gibst du dem älteren Herrn bekannt.",

                                                        next: {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Wenn sie so weitermachen, werde ich die Polizei rufen!",
                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Der perplex wirkende Mann entgegnet diesem nur:",
                                                                next: {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: AeltererHerr,
                                                                    text: "Wieso das denn? Das ist doch vollkommen übertrieben!",
                                                                    next: {
                                                                        dialogType: DialogType.PlayerOptionDialog,
                                                                        choices: [
                                                                            {
                                                                                dialogType: DialogType.PlayerDialog,
                                                                                text: "Sie belästigen grundlos das junge Mädchen!",

                                                                                next: {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    text: "kritisierst du den Mann,",

                                                                                    next: {
                                                                                        dialogType: DialogType.PlayerDialog,
                                                                                        text: "Das ist Grund genug die Polizei zu verständigen!",

                                                                                        next: {
                                                                                            dialogType: DialogType.NarratorDialog,
                                                                                            text: "Der genervte Mann erwidert dazu nur:",

                                                                                            next: {
                                                                                                dialogType: DialogType.NPCDialog,
                                                                                                speaker: AeltererHerr,
                                                                                                text: "Jaja, ich bin ja jetzt ruhig.",

                                                                                                next: {
                                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                                    text: "Der ältere Herr hielt sein Wort und redete kein Wort. Beim Ausstieg beschwerte er sich lautstark, dass man heutzutage ja auf alles so empfindlich reagiere. Das junge Mädchen bedankte sich bei dir für die Unterstützung.",
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                dialogType: DialogType.PlayerDialog,
                                                                                text: "\"Sie haben ja recht.\"",

                                                                                next: {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    text: "da du keine unnötige Konfrontation mit dem Mann wolltest, war deine einzige Option dem älteren Herren zu zustimmen. Der muslimenfeindliche Mann warf noch einige Sprüche dem hilflosen Mädchen an den Kopf, bis er zum Ende hin aussteigen musste und den Zug verließ. Durch das Nachgeben wurde dem jungen Mädchen nicht wirklich geholfen und wurde weiterhin diskriminiert.  War das wirklich die beste Option?",

                                                                                }
                                                                            },
                                                                            {
                                                                                dialogType: DialogType.PlayerDialog,
                                                                                text: "\"Die Religion des jungen Mädchen hat Sie nichts zu interessieren Und das beinhaltet auch wie sie sich kleidet!\"",

                                                                                next: {
                                                                                    dialogType: DialogType.NarratorDialog,
                                                                                    text: "machtest du deinen Standpunkt dem Mann gegenüber klar, Der grimmige Herr meinte nur:",

                                                                                    next: {
                                                                                        dialogType: DialogType.NPCDialog,
                                                                                        speaker: AeltererHerr,
                                                                                        text: "Ich bin ja schon leise. Heutzutage darf man ja nicht mal seine Meinung sagen.",

                                                                                        next: {
                                                                                            dialogType: DialogType.NarratorDialog,
                                                                                            text: "Der Rest der Fahrt verlief ruhig. Das junge Mädchen wurde in Ruhe gelassen. Beim Aussteigen bedankte sich das Mädchen herzlich bei dir.",
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
                                                }

                                            ]
                                        }
                                    }
                                }
                            }

                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du filmst die Situation mit deinem Handy.",

                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Du zückst dein Handy aus deiner Tasche und filmst die ganze Situation. Der ältere Mann bemerkt dein Vorhaben relativ schnell und droht dir wegen der Verletzung seiner Persönlichkeitsrechte mit einer Klage.",

                                next: {
                                    dialogType: DialogType.PlayerOptionDialog,
                                    choices: [
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du hörst auf mit dem Filmen und entschuldigst dich.",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Eingeschüchtert wegen der Drohung nimmst du dein Handy wieder runter und hörst auf zu filmen. Du entschuldigst dich, daraufhin fragt er nur wieso du ihn gefilmt hast und ob deine Eltern dir keine Manieren beigebracht hätten.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du nimmst die Schuld auf dich.",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Das war mein Fehler, bitte entschuldigen Sie\" ",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "erwiderst du nur, während sich der ältere Herr lautstark über dich beschwert. Die Situation hat sich zwar nicht zum besseren gewendet, aber wenigstens hat der Mann das kopftuchtragende Mädchen nicht mehr im Visier, dafür aber dich. Ist das wirklich das beste Ergebnis für diese Situation?",
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du weist ihn auf sein Fehlverhalten hin",

                                                            next:{
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "\"Hätten sie das Mädchen in Ruhe gelassen, hätte ich sie nicht filmen müssen!\"",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "war das einzige was du entgegnen konntest.",

                                                                    next: {
                                                                        dialogType: DialogType.NPCDialog,
                                                                        speaker: AeltererHerr,
                                                                        text: "Typisch die heutige Jugend! Die müssen auch alles mit ihrem neumodischen Krimskrams aufnehmen, wenn ihnen etwas nicht passt! Sei du mal Glücklich, dass ich nicht die Polizei rufe! Eine Frechheit!",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Für den Rest der Fahrt grummelte der Mann nur noch mürrisch vor sich hin. Dabei ließ er dich sowie die Muslima in Ruhe. Ein voller Erfolg, oder nicht?",
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du setzt dich weg von dem älteren Herren",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Da du die Geduld um mit dem Mann zu diskutieren nicht aufbringen konntest, entschiedst du dich deinen Sitzplatz zu ändern und dich soweit es geht vom älteren Mann fern zu halten. Bei der nächsten Haltestelle siehst du wie das kopftuchtragende Mädchen mit Tränen in den Augen aussteigt. War das die richtige Wahl?",

                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du lässt dich nicht einschüchtern und filmst weiter",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Du lässt dich nicht einschüchtern und filmst den Herren weiterhin. Daraufhin wird er nur noch aggressiver und beleidigender.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Solange sie die junge Dame weiterhin belästigen, werde ich nicht aufhören!\"",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "forderst du auf. Der grimmige Mann erwidert:",

                                                                next: {
                                                                    dialogType: DialogType.NPCDialog,
                                                                    speaker: AeltererHerr,
                                                                    text: "Ist ja gut, aber pack endlich dieses Handy weg!",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Der Mann hielt sein Wort und die Rest der Fahrt wurde leise abgesessen. Beim Aussteigen bedankte sich die junge Frau noch schnell für die Hilfe.",
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Ist ja gut, ich höre ja auf!\"",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "gabst du nach. Selbstzufrieden ging der Mann seiner Tätigkeit nach, dem Diskriminieren der armen Frau. Überfordert und mit Tränen im Gesicht steigt die hilflose Frau aus dem Zug. Das war wohl nicht die beste Auswahl.",
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "\"Das Video zeig ich der Polizei, wenn sie nicht aufhören die junge Frau zu belästigen!\"",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "drohst du den älteren Herren. Der alte Mann wollte sich dies von einem Grünschnabel natürlich nicht gefallen lassen und wurde daraufhin nur noch aggressiver. Nach kurzer Zeit zeigten sich die Fahrgäste immer genervter, bis sich einer von ihnen beschwert und meint wenn du und der ältere Herr schreien wollt, dass ihr den Zug verlassen sollt.",
                                                            }
                                                        }

                                                    ]
                                                }

                                            }

                                        },
                                        {
                                            dialogType: DialogType.PlayerDialog,
                                            text: "Du schlägst ihm ein Kompromiss vor",

                                            next: {
                                                dialogType: DialogType.NarratorDialog,
                                                text: "Du schlägst dem älteren Herren ein Kompromiss vor. Wenn er aufhört die Frau zu belästigen, wirst du das filmen lassen. Der alte Mann sieht nicht sehr begeistert aus von deinem Kompromiss und meint das was er getan hat keine Diskriminierung ist, sondern nur wahre Fakten aufgelistet hat.",

                                                next: {
                                                    dialogType: DialogType.PlayerOptionDialog,
                                                    choices: [
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du beharrst auf das Kompromiss",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Lassen sie die Frau in Ruhe und ich höre auf!",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "Nach einem langem hin und her stimmte der Mann endlich zu.",

                                                                    next: {
                                                                        dialogType: DialogType.NPCDialog,
                                                                        speaker: AeltererHerr,
                                                                        text: "Frechheit mir sowas vorzuwerfen. Nimm dein Handy runter, ich bin ja schon still!",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Daraufhin nahmst du dein Handy runter. Die restliche Fahrt verging im stillen. Für deine Zivilcourage hast du von dem Mädchen mit Kopftuch ein herzliches Danke bekommen.",
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du stimmst zu ",

                                                            next: {
                                                                dialogType: DialogType.NarratorDialog,
                                                                text: "Frustriert von der Uneinsichtigkeit des Mannes belässt du es einfach dabei. Der ältere Mann der nun wieder freie Bahn hatte, ließ seine Wut an dem muslimischen Mädchen aus. Da sie sich nicht zu helfen wusste, verließ sie die Bahn frühzeitig um der Situation zu entkommen. Dich plagten zur Folge schwere Schuldgefühle. Das war vielleicht nicht die beste Entscheidung.",

                                                            }
                                                        },
                                                        {
                                                            dialogType: DialogType.PlayerDialog,
                                                            text: "Du korrigierst den Mann",

                                                            next: {
                                                                dialogType: DialogType.PlayerDialog,
                                                                text: "\"Stellen sie ihre diskriminierende Meinungen nicht als Fakten da!",

                                                                next: {
                                                                    dialogType: DialogType.NarratorDialog,
                                                                    text: "korrigiertest du den älteren Herrn. Der Mann erwiderte daraufhin nur, dass man früher mehr sagen durfte und die Jugend von heute zu schwach und sensibel wären. Für den Rest der Fahrt blieb der Mann  ruhig, außer den gelegentlich anstößigen Aussagen. Dies war zwar nicht unbedingt die beste Auswahl, aber auch nicht die schlechteste. Für das Eingreifen war die Muslima sehr dankbar.",
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
                        },
                        {
                            dialogType: DialogType.PlayerDialog,
                            text: "Du setzt dich neben das Mädchen und unterhältst dich mit ihr",

                            next: {
                                dialogType: DialogType.NarratorDialog,
                                text: "Du stehst von deinem Platz auf und gesellst dich zu dem muslimischen Mädchen. Sie wirkt sichtbar erleichtert und geht auf das Gespräch mit Freude ein. Ganz im Gegensatz zum älteren Herrn. Das er nun von euch beiden ignoriert wird gefällt ihm nicht, was er lautstark zum Ausdruck bringt.",

                                next: {
                                    dialogType: DialogType.NPCDialog,
                                    speaker: AeltererHerr,
                                    text: "Kopftuchträger haben hier in Deutschland nichts zu suchen! Ihr seid doch alles Terroristen.",
                                    next: {
                                        dialogType: DialogType.PlayerOptionDialog,
                                        choices: [
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Du gehst auf die Provokation des Mannes ein",

                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "\"Sie sollten sich schämen solche Lügen zu verbreiten!\"",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "machst du dem grimmigen Mann klar. Daraufhin erwiderte Er nur, dass alles was er sage doch der Wahrheit entspräche und man Muslime aus dem Lande verweisen solle.",
                                                        next: {
                                                            dialogType: DialogType.PlayerOptionDialog,
                                                            choices: [
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du gehst auf seine Provokation erneut ein",

                                                                    next: {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "\"Wenn sie nichts sinnvolles zu sagen haben, seien sie bitte still!\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "gingst du auf seine Aussage ein. Dies ging einige Zeit so hin und her, während das Mädchen sich im Mittelpunkt der Diskussion befand und es ihr irgendwann zu viel wurde und in Tränen ausbrach. Damit wurde dir klar, dass du die Situation falsch angegangen bist. Wie hättest du dies vermeiden können?",
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du setzt dich mit dem Mädchen weg",

                                                                    next:{
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Dir wird klar, dass so dem Mädchen nicht geholfen ist und der ältere Mann zeigt sich so uneinsichtig sodass jede Diskussion sinnlos ist. Also entscheidet ihr euch von der Situation zu distanzieren und weg zu setzen, damit das kopftuchtragende Mädchen endlich ihre Ruhe hat. Am Ende des Tages hast du nicht nur einem netten Mädchen geholfen, sondern auch eine neue Freundin dazugewonnen. Gut gemacht!",
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du versuchst den Mann aufzuklären",

                                                                    next: {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "\"Sie können doch nicht alle Muslime in einen Topf werfen! Jede Religion hat Extremisten, nicht nur der Islam.\". ",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Der Mann wirkt nicht überzeugt, da er jedoch zu jedem was er sagt, etwas zurück gesagt bekommt, entscheidet er sich für die restliche Zugfahrt nichts mehr zu sagen. Hin und wieder merkst du seinen mürrischen Blick auf das Mädchen gerichtet. Die Muslima ist erleichtert, dass ihr jemand geholfen hat, auch wenn ihr der Blick des älteren Mannes sehr unangenehm ist.",
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
                                                text: "Du ignorierst den Mann weiterhin",

                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "Der Mann, der sich das Ignorieren seiner Person nicht gefallen lässt, setzt nochmal nach:",

                                                    next: {
                                                        dialogType: DialogType.NPCDialog,
                                                        speaker: AeltererHerr,
                                                        text: "Typisch Kopftuchträger, die können ja alle eh kein Deutsch!",

                                                        next: {
                                                            dialogType: DialogType.PlayerOptionDialog,
                                                            choices: [
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du ignorierst den Mann weiterhin",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Das weitere Ignorieren trägt zur Folge, dass der ältere Herr kein Blatt vor den Mund nimmt und seine antimuslimischen Aussagen schamlos fortsetzt. Dadurch das man wegen der Stille im Zuges jedes Wort des Mannes klar und deutlich hören konnte, fühlte sich das Mädchen immer unwohler. Das ist zwar nicht das beste Ergebnis, aber wenigstens musste das Mädchen dies dank dir nicht alleine durchstehen.",
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Du konfrontierst den Mann",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "\"Nur weil sie ein Kopftuch trägt, heißt das bei langem noch nicht das sie kein Deutsch kann! Bevor sie noch weitere unnötige Aussagen rausposaunen wollen, tun sie alle einen Gefallen und seien sie still.\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "entgegnest du dem älteren Herrn. Für den Rest der Fahrt blieb der Mann ruhig, außer den gelegentlichen grummeln und beschweren. Das muslimische Mädchen war dir sehr dankbar, weil du als einzige Person in die Situation eingegriffen hast.",
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    dialogType: DialogType.PlayerDialog,
                                                                    text: "Ihr setzt euch weg von dem älteren Herrn",

                                                                    next: {
                                                                        dialogType: DialogType.NarratorDialog,
                                                                        text: "Dir wird klar, dass so dem Mädchen nicht geholfen ist und der ältere Mann zeigt sich so uneinsichtig sodass jede Diskussion sinnlos ist. Also entscheidet ihr euch von der Situation zu distanzieren und weg zu setzen, damit das kopftuchtragende Mädchen endlich ihre Ruhe hat. Am Ende des Tages hast du nicht nur einem netten Mädchen geholfen, sondern auch eine neue Freundin dazugewonnen. Gut gemacht!",
                                                                    }
                                                                }

                                                            ]
                                                        }
                                                    }

                                                }

                                            },
                                            {
                                                dialogType: DialogType.PlayerDialog,
                                                text: "Du versuchst den Mann aufzuklären",

                                                next: {
                                                    dialogType: DialogType.NarratorDialog,
                                                    text: "\"Das stimmt doch garnicht! Muslime sind keine Terroristen, dass sind Extremisten die mit dem eigentlichen Glauben nichts zu tun haben.\"",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Der Mann reagiert sehr uneinsichtig",

                                                        next: {
                                                            dialogType: DialogType.NPCDialog,
                                                            speaker: AeltererHerr,
                                                            text: "Das mag ja sein, aber trotzdem gehören die ja zur Religion an",
                                                            next: {
                                                                dialogType: DialogType.PlayerOptionDialog,
                                                                choices: [
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "\"Beim Christentum gibt es genauso Extremisten. Die werden ja auch nicht dazu gezählt.\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "argumentierst du gegen seine Aussage. Daraufhin antwortete der Mann nicht und würdigte dich keines Blickes. Dir war es egal, ob er antwortete oder nicht, solange er das muslimische Mädchen in Ruhe ließ. Für die restliche Fahrt herrschte Ruhe im Zug, wofür dir das Mädchen sehr dankbar war.",
                                                                        }
                                                                    },
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "\"Wenn das ihre Meinung ist, behalten sie diese bitte für sich!\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Der Mann hatte diese Reaktion auf seine Aussage nicht erwartet und maulte nur, wie respektlos die heutige Jugend sei und das zu seiner Zeit man Respekt vor Älteren hatte. Für den Rest der Fahrt ließ der Mann dich und das kopftuchtragende Mädchen in Ruhe. beim Aussteigen bedanke sie sich nochmal intensiv bei dir. Dies machte dir klar, dass es die richtige Entscheidung war einzugreifen.",

                                                                        }
                                                                    },
                                                                    {
                                                                        dialogType: DialogType.PlayerDialog,
                                                                        text: "\"Und was macht Sie zum Experten für den Islam?\"",

                                                                        next: {
                                                                            dialogType: DialogType.NarratorDialog,
                                                                            text: "Der Mann wirkte empört, wusste jedoch nicht genau was er darauf antworten hätte können und blieb aus Folge dessen leise. Die restliche Fahrt verging ohne Probleme. Das Mädchen war dir dankbar für das Eingreifen in die Situation.",
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
                        }
                    ]

                }
            },
        },
    },
}
