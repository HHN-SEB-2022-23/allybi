import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import { Tag } from "../../types/Tags"

export const herkunft: Chapter = {
    title: "Beim Fußballtraining",
    tags: [Tag.diskriminierungstyp1],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Beim Fußballtraining beobachtest du wie ein  Mitspieler zu einem afrikanischem Mitspieler sagt \"Kein wunder das er so schnell rennen kann, er kommt ja aus dem Dschungel\".",
        next: {
            dialogType: DialogType.PlayerOptionDialog,
            choices: [
                {
                    dialogType: DialogType.PlayerDialog,
                    text: "A: Du ignorierst die Aussage",

                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Dadurch dass niemand eingreift fährt der Mitspieler fort \"Wenn er für jedes Tor eine Banane bekommen würde, dann würde er bestimmt mehr Tore schießen\". Einige Mitspieler lachen über die Kommentare des Mitspielers. Der Afrikanische Junge sieht sehr betrübt aus, da ihm keiner hilft, und der Trainer scheint von allem nichts mitzubekommen.",

                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "A: Du ignorierst es erneut",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Da erneut niemand eingreift sieht der Mitspieler keinen grund mit seinen verletzenden Aussagen aufzuhören. \"Der kann isch ja nichtmal ordentliche Schuhe leisten\" sagt er und zeigt auf die alten Schuhe des Afrikanischen Mitspielers.  Diesem ist es ersichtlich peinlich und tränen kommen aus seinen Augen.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A:  Du weißt deinen Mitspieler daraufhin das seine Schuhe auch nicht mehr die neusten sind",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Er gibt dir zu verstehen das er dein Kommentar nicht witzig findet und du besser nach dir schauen solltest. Leider wurde in dieser situation dem Afrikanischem Jungen nicht geholfen und dem Mitspieler sein fehlverhalten nicht aufgezeigt. War das wirklich die optimale Lösung?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Du Konfrontierst den mitspieler, da es jetzt entschieden zu weit geht und drohst ihm den Trainer zu rufen",

                                                    next:{
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Als du ihm drohst den Trainer zu rufen blickt er dich nur böse an. Er lässt es zwar für den rest des Trainings sein weitere Kommentare abzugeben, aber du spürst das wenn du nicht aufpasst du genauso ins visier von seinen Sprüchen geraten kannst. Dein Eingreifen war zwar richtig aber sehr spät das der Afrikanische Junge schon am weinen ist. Hätte man das nicht durch ein früheres eingreifen verhindern können?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Du mischt dich weiterhin nicht ein",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Dem Afrikanischen Mitspieler wird es zu viel und da niemand eingreift rennt er weinend in die Kabine. Der Trainer der von allem nichts mitbekommen hat steht verdutzt da. Es kam soweit das der Junge sich so hilflos fühlte, das er sich gezwungen sah vor der Situation zu fliehen. Das war wohl nicht die richtige Entscheidung.",

                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "B: Du konfrontierst den Mitspieler",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Du gibst deinem Mitspieler zu verstehen das es jetzt reicht und seine Aussagen nicht in Ordnung sind. Daraufhin antwortet er das er doch nur spaß mache und das ja wohl in Ordnung sei, da es alle witzig finden. Du weißt genau das es für den Afrikanischen Jungen kein spaß ist und du findest seine Aussagen auch nicht witzig.  Was tust du?",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Du erkläst ihm das seine Aussagen keine witze sondern Rassistische Äußerungen sind",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du machst ihm klar das seine \"Witze\" alles andere als witzig sind und er nur versucht Rassismuss mit humor zu verpacken. Außerdem sind das nur Vorurteile die er sagt er kennt die Afrikanische Kultur ja gar nicht. Etwas Perplex antwortet er das es ja nicht so gemeint war und er den Afrikanischen Jungen nicht verletzen wollte und entschuldigt sich bei Ihm. Nach dem Training dankt dir der Afrikanische Junge das du ihm aus der Situation geholfen hast. Ist das der Anfang einer neuen Freunschaft?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Du versuchts ihm klar zu machen das es  für den Afrikanischen Jungen kein spaß ist",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du versuchst ihm zu erklären das seine Aussagen für den Afrikanischen Jungen  kein spaß sind, sondern sehr verletzend sind, es sich aber nicht traut etwas zu sagen. Er merkt nur an das man ja wohl noch witze machen dürfte und das man nicht gleich alles Persönlich nehmen soll. Er hört zwar für den Rest des Trainings mit den sprüchen auf aber hat er wirklich verstanden das es nicht in Ordnung war?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Du belässt es dabei",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "In der Hoffnung das der Mitspieler jetzt aufhört beläst du es dabei. Allerdings fängt er nach kurzer Zeit schon wieder mit seinen Kommentaren an. Der Afrikanische Junge wirkt nach dem Training äußerst bedrückt und traut sich auch nicht etwas dem Trainer zu sagen. Wurde dem Afrikanischen Jungen wirklich geholfen oder hättest du noch mehr tun können?",
                                                    }
                                                }

                                            ]
                                        }

                                    }

                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "C: Du frägst einen anderen Mitspieler ob er die Aussage nicht verletzend findet",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Du gehst zu einem anderen Mitspieler und frägst ihn ob er die Aussagen in Ordnung findet. Er sagt dir das ihm das auch zu weit geht, auch wenn er glaubt das der Mitspieler das nicht böse meint, sondern nur witzig sein will.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Ihr beschließt gemeinsam den Mitspieler zu konfrontieren",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Gemeinsam geht ihr zu dem Mitspieler und teilt ihm mit das ihr seine Kommentare nicht in Ordnung findet. Und sein Verhalten dem Afrikanischen Mitspieler gegenüber nicht tolerierbar ist. Weitere Mitspieler stimmen euch zu und er sieht seine Fehler ein und entschuldigt sich bei dem Afrikanischen Jungen. Dieser lächelt jetzt wieder und hat wieder Spaß am Training. Das war eine gute Idee jemand dazuzuholen gut gemacht.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Ihr geht zusammen zu dem Afrikanischen Mitspieler und redet mit Ihm",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Ihr geht zu dem Afrikanischen Mitspieler und redet mit ihm, es ist sichtlich verletzt von den Aussagen des anderen Spielers. Dieser traut sich jetzt nicht mehr weitere Kommentare von sich zu geben, da er merkt dass ihr das nicht in Ordung findet und dem Afrikanischen Jungen gesellschaft leistet. Somit habt ihr dafür gesorgt das der Mitspieler mit seinen Kommentaren aufhört, allerdings wurde er nicht über sein fehlverhalten aufgeklärt, somit ist nicht sicher ob er das nächste mal nicht wieder damit anfangen wird.",

                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Ihr wollt nach dem Training zum Trainer gehen und ihm davonberichten was passiert ist",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Nach dem Training berichtet ihr dem Trainer was passiert ist. Bestürzt davon das er nichts mitbekommen hat frägt er euch warum ihr nicht früher zu ihm seid oder eingegriffen habt. Der Afrikanische Junge ist schon weg und der andere Mitspieler auch. Somit kann es zumindest heute nicht mehr geklärt werden. Hättet ihr dem Trainer früher bescheid gesagt oder selbst eingegriffen hätte die Situation gleich geklärt werden können, somit muss ibs zum nächsten Training gewartet werden, das ist wohl nicht die optimale Lösung.",
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
                    text: "B: Du gehst zum Trainer und berichtest ihm was vorgefallen ist",

                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "Dir ist bewusst, dass du alleine nicht viel ausrichten kannst. Also machst du dich auf den Weg zum Trainer um ihn von dem Geschehenen zu berichten und nach Hilfe zu bitten. Der Trainer reagiert geschockt und begebt sich schnell zum Trainingsplatz. Dort befinden sich die zwei Mitspieler, die sich momentan lautstark streiten. \"Warum bin ich der Schuldige, wenn sich der Affe doch mehr Mühe beim Bälle passen machen könnte!\", streitet der rassistische Mitspieler seine Schuld ab.",

                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "A: Du wirfst deinen Mitspieler rassistisches Verhalten vor",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Du versuchst deinen Mitspieler erfolglos aufzuklären, er sei nicht nur unnötig gemein, sondern auch extremst rassistisch. Dein Tadeln geht praktisch von einem Ohr rein und von dem anderen raus. Er scheint nicht zuhören zu wollen und rechtfertigt seine Aussage als Kritik. Dein Trainer ist sehr unzufrieden mit der Situation.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Du wirst ungeduldig und lässt deinen Frustration freien lauf",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Dir geht das Verhalten deines Mitspielers extremst gegen den Strich und findest dass das Beleidigen des Rassistischen Mitspielers mehr als gerechtfertigt ist. Also ist genau dies auch, dass was du tust. Blöd ist nur, dass das deinem Trainer aber garnicht gefallen hat und nun nicht nur der rassistische Mitspieler bestraft wird, sondern du gleich mit dazu. Blöd gelaufen.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Du forderst deine anderen Mitspieler auf auch was dazu zu sagen",

                                                    next:{
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du merkst, dass egal was du machst, er seine Meinung nicht ändern wird. Also entscheidest du dich dazu, deine anderen Mitspieler in die Situation einzubinden. Natürlich fanden deine Co-Spieler das Verhalten des rassistischen Jungen alles andere als Toll. Zusammen als Gruppe redetet ihr auf den Jungen ein und machtet ihm klar, dass sein Verhalten unakzeptabel ist. Da ihr in der deutlichen Mehrzahl wart, traute er sich nicht auf eine erneute Konfrontation und stimmte leise zu. Dein Trainer war sehr zufrieden mit dem Verlauf der Situation und hielt noch eine kurze Predigt wie wichtig Zusammenhalt bei Fußball doch ist und somit war die Situation beendet. Jedoch jedes mal wenn der Junge mit seinem afrikanischen Mitspieler alleine war, ging die ganze Situation von vorne los, bis es sich zu einem handgreiflichen Streit entfachte. War das wirklich die beste Entscheidung?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Du unterstützt den afrikanischen Jungen mit seiner Erklärung ",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Der schwarze Junge erläutert die Situation aus seiner Sicht. Du unterstütztes ihn dabei. Dies löste eine Kettenreaktion aus und immer mehr Mitspieler unterstützten den Jungen mit afrikanischer Herkunft. Die Situation wurde schnell aufgeklärt und der Trainer stellte den diskriminierenden Jungen zur Rede. Im Laufe des Tages wurde mit den anderen Autoritätspersonen über seine Strafe geredet. Die Entscheidung fiel auf das aussitzen bei Spielen und bei mehrmaligem Fehlverhalten drohte ein Rauswurf. Der afrikanische Junge bedankte sich bei der Mannschaft. Hättest du den Trainer nicht gerufen, wäre die Situation vermutlich eskaliert.",

                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "B: Du mischt dich nicht mehr ein. Dein Trainer wird es schon regeln.",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Das erste was dein Trainer macht ist das trennen der beiden Parteien. Daraufhin folgt die Befragung: Was ist passiert? Wer hat angefangen? Der rassistische Mitspieler wirft gleich alle Schuld von sich. Er hätte hier nur gestanden, als der schwarze Mitspieler anfing ihn zu beleidigen. Der Trainer guckt die Mannschaft an und fordert antworten.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Du klärst die Situation auf",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du beichtest deinem Trainer den Verlauf der Konfrontation und wie der afrikanische Junge grundlos beleidigt wurde. \"Die beiden sind befreundet, natürlich lügt der doch!\", schob der rassistische Junge mit ein. Da niemand anderes etwas zu der Aufklärung der Situation beigetragen hat, wurde alles als ein freundlichen Raufen zwischen Freunden abgestempelt. Der Trainer war nicht gerade zufrieden mit dir, dass du ihn für sowas gerufen hast. Die Situation hat sich nicht gebessert und der Junge ließ immer wieder rassistische Beleidigung gegen den Afrikanischen Mitspieler fallen. Irgendwann wurde es ihm zu viel und er verließ das Team. Dich plagten Schuldgefühle. Wie hättest du diese Situation umgehen können.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Du bleibst still",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Eine unangenehme Stille herrschte auf dem Feld. Niemand traute sich die Situation aufzuklären. Der ungeduldige Trainer meinte, er habe keine Zeit für Kinderspiele und forderte den afrikanischen Jungen nach einer Erklärung. Der Junge erklärte sich. Als Folge wurden beide bestraft, da ja niemand bezeugen konnte, dass der schwarze Junge nichts gemacht hätte. Wegen deiner Stille wurde ein unschuldiger Junge mit bestraft. War dies wirklich die richtige Entscheidung?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Du forderst deine anderen Mitspieler zum reden auf",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du forderst alle auf etwas zur Aufklärung beizutragen. Deine Freunde unterstützen dich dabei und somit wurde die Situation erfolgreich dem Trainer erklärt. Er entschuldigte sich persönlich bei dem diskriminierten Jungen, da all dies unter seiner Obhut passiert ist. Die Eltern des rassistischen Jungen wurden gerufen und es wurde über die Konsequenzen geredet. Als erste Verwarnung wird der Junge einige Zeit lang bei Spielen aussetzen müssen. Der afrikanische Junge ist relativ zufrieden mit dem Ende der Situation und bedankt sich bei euch für die Hilfe.",
                                                    }
                                                }

                                            ]
                                        }

                                    }

                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "C: Die ermutigst den afrikanischen Jungen die Situation aufzuklären.",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Du stehst dem Jungen beiseite und ermutigst ihn die Situation aufzuklären. Mit deiner Hilfe ist der afrikanische junge in der Lage sich zu verteidigen. Der Trainer stellt in folge dessen den diskriminierenden Jungen zur Rede. \"Ich meinte das doch so nicht! Es war nur ein Scherz.\", verteidigte sich der Junge.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: \"Man kann Rassistische Bezeichnungen doch nicht als Scherz abstempeln!\"",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "\"Man kann Rassistische Bezeichnungen doch nicht als Scherz abstempeln!\", entgegnest du. Der Trainer stimmt dir zu und bittet den diskriminierenden Jungen nach dem Training länger da zu bleiben, da sie noch wichtiges zu bereden hätten. Am nächsten Tag erzählt dir dein schwarzer Mitspieler, dass sich der Junge von gestern entschuldigt hätte. Als Konsequenz müsse der diskriminierende Junge für einige Zeit aussetzen müssen. Der afrikanische Junge bedankte sich bei dir.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Du lässt den Trainer alles regeln",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Da dem Trainer bewusst ist was gesagt wurde, wurde der diskriminierende Junge zur Seite genommen. Bei dem persönlichen Gespräch wurde nochmal auf sein Fehlverhalten eingegangen. Solle dies noch einmal passieren, drohe dem Jungen ein Rauswurf aus der Mannschaft. Der schwarze junge bekam hierbei noch eine Entschuldigung von dem Trainer sowie vom diskriminierenden Jungen. Der Junge mit afrikanischer Herkunft war glücklich darüber, dass die Situation endlich sich dem Ende geneigt hat.",

                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Du machst im klar das die Situation für den afrikanischen Jungen nicht spaßig war",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "\"Würdest du das auch lustig finden, wenn ich anfange dich auf dein äußeres zu reduzieren ?\". Der Junge blieb still und schüttelte leise den Kopf. \"Also warum denkst du, dann das deine Aussagen lustig waren?\" Der Trainer stimmte zu und forderte den diskriminierenden Jungen auf sich zu entschuldigen. Der schwarze Junge erhielt seine Entschuldigung. Das war nicht die einzige Konsequenz die der fehlverhaltende Junge bekommen hat. Bei erneuten Fehlverhalten drohte der Rauswurf aus der Fußballmannschaft.",
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
                    text: "C: Du konfrontierst den Mitspieler mit seiner Aussage",

                    next: {
                        dialogType: DialogType.NarratorDialog,
                        text: "\"Schämst du dich nicht solche rassistischen Aussagen zu posaunen, nur weil du auf seine Leistung eifersüchtig bist?\", verteidigst du deinen Mitspieler. \"Wer sagt denn, dass ich eifersüchtig bin? Ich sage doch nur die Wahrheit!\". Du merkst langsam, dass dein schwarzer Mitspieler dabei ist die Fassung zu verlieren. Die Situation spitzt sich zu, wenn du nichts unternimmst könnte die Situation handgreiflich enden.",

                        next: {
                            dialogType: DialogType.PlayerOptionDialog,
                            choices: [
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "A: Du unternimmst nichts",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Als es zu eskalieren droht bemerkt der Trainer den Streit und eilt schnell herbei. Er fodert die Mannschaft auf ihm zu erklären was hier los ist. Doch keiner traut sich ihm zu erklären was vorgefallen ist.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: den afrikanischen Jungen dazu ermutigen das er erzählt was passiert ist",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Froh darüber das er jetzt Unterstützung bekommt erzählt der Afrikanische Junge dem Trainer was vorgfefallen ist. Der Trainer ist sehr schockiert darüber was passiert ist und gibt das dem Mitspieler der die rassistischen Aussagen getätigt hat klar zu verstehen. Er entschuldigt sich ebenso bei dem Afrinakischen Jungen das er es nicht mitbekommen hat, und bedankt sich bei dir das du Zivilcourage gezeigt hast und eingegriffen hast. Du hattest glück das der Trainer noch reichtzeitig gekommen ist, dennoch ging es gut aus.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: nichts sagen",

                                                    next:{
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Da keiner dem Trainer berichtet was passiert ist bleibt ihm nichts anderes übrig als die zwei Streitenden zu bestrafen. Obwohl der Afrikanische Junge nichts getan hat wurde auch er bestraft. Und ob sich der andere Mitspieler das nächste mal anderst verhält ist auch nicht sicher. Hättest du dem Trainer vielleicht doch sagen sollen was passiert ist?",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: den Trainer aufklären",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du erzählst dem Trainer was vorgefallen ist und er ist schockiert. Nach deiner erzählung frägt er den Afrikanischen Jungen ob das stimmt was du ihm erzählt hast. Als dieser es bestätigt entschuldigt er sich bei Ihm das er es nicht mitbekommen hatte und deswegen erst so spät eingegriffen hat. Dann nimmt er sich den Mitspieler mit den rassistischen Kommentaren zu Seite und redet mit Ihm. Alsi die beiden zurück kommen entschuldigt sich dieser bei dem Afrikanischen Jungen und verspricht das es nicht wieder vorkommt. Der Trainer bedankt sich außerdem bei dir dafür das du eingegriffen hast und fordert die Mannschaft auf in Zukunft immer sofort zu ihm zu kommen sollte sowas nochmal vorkommen. Du hattest glück das der Trainer noch rechtzeitig dazukam, aber es war gut dem Trainer zu erzählen was passiert ist.",

                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "B: Du hältst den afrikanischen Mitspieler zurück",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Du hältst den afrikanischen Jungen zurück und redest auf ihn ein. Es würde nur Probleme geben, wenn er auf die Provokation eingehen würde. Um eine Konfrontation zu vermeiden schlägst du dem Jungen vor...",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Zum Trainer zu gehen",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Der Junge stimmt dir zu und gemeinsam geht ihr den Trainer holen. Angekommen, erklärt ihr erstmal was vorgefallen ist und er reagiert schockiert. Er wirkt entzürnt, dass sowas in seiner Anwesenheit passiert ist. Er versichert dem Jungen, dass sowas in der Zukunft nicht mehr vorkommen wird und versichert das er sich darum kümmern wird. Der Rest des Trainings verlief problemlos.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Euch von dem Jungen zu distanzieren",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Der Junge stimmt dir zu und gemeinsam entfernt ihr euch von eurem Mitspieler. Der Mitspieler ruft euch gehässig einige Sprüche nach, aber folgt euch zu eurem glück nicht. Das war nicht unbedingt die beste Lösung, da euer Mitspieler keine Konsequenzen zu spüren bekommen hat, aber dafür hast du (für jetzt) das Schlimmste verhindert.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Die Provokationen zu ignorieren",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Ihr beschließt euch den Worten eures Mitspielers keine Beachtung zu schenken. Dieser wird mit der Wahl seiner Beleidigungen immer hemmungsloser. Da ihr nichts dagegen gemacht habt, hat der Trainer von diesem ganzen Spektakel nichts mitbekommen und somit kam der diskriminierende Junge mit seinem Fehlverhalten  ohne Konsequenzen durch. Vielleicht hättet ihr euch für was anderes entscheiden sollen.",
                                                    }
                                                }

                                            ]
                                        }

                                    }

                                },
                                {
                                    dialogType: DialogType.PlayerDialog,
                                    text: "C: Du fragst deine anderen Mitspielern ob sie helfen könnten",

                                    next: {
                                        dialogType: DialogType.NarratorDialog,
                                        text: "Dir ist bewusst, dass du die Situation nicht allein in den Griff bekommst. Deine einzige Option ist dir Hilfe von deinen Mitspielern zu holen. Mithilfe der anderen gelingt es euch die beiden von einander zu trennen.",

                                        next: {
                                            dialogType: DialogType.PlayerOptionDialog,
                                            choices: [
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "A: Den Trainer holen",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Du machst dich auf dem Weg zum Trainer um ihm über die Situation aufzuklären. Er wirkt geschockt und schnell eilt ihr Beide zurück zum Feld. Angekommen, nimmt er beide Streitparteien zur Seite um sie zu befragen. Schnell kommt der Grund zum Vorschein. Er pflichtet dir bei das des verhalten des Mitspielers untragbar ist , jedoch hättet ihr früher den Trainer holen sollen bevor es fast zu handgreiflichkeiten gekommen ist.",
                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "B: Es selbst klären",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Nachdem beide voneinander getrennt sind versuchst du zwischen den beiden zu vermitteln. Nach einigen Minuten des Gesprächs zeigt der Mitspieler sich einsichtig das seine Kommentare verletzend gegenüber dem afirkanischen Jungen waren. Ebenso gibt der Afrikanische Junge zu das es nicht richtig war sich davon provozieren zu lassen. Die beiden geben sich die Hand und versuchen ab jetzt besser mit einander auszukommen. Somit wurde die Situatzion gerade noch so gelöst.",

                                                    }
                                                },
                                                {
                                                    dialogType: DialogType.PlayerDialog,
                                                    text: "C: Auf den Jungen einreden ?",

                                                    next: {
                                                        dialogType: DialogType.NarratorDialog,
                                                        text: "Die Ignoranz deines Mitspielers hinsichtlich dieser Thematik war unakzeptabel. Und das versuchtest du dem Jungen natürlich klarzumachen. Dieser reagierte auf das ganze Gerede nicht sehr positiv, was er dir mit Nichtachtung zeigte. Dies verlief nicht so wie es du dir vorgestellt hattest.",
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
            ]

        },
    },
}
