import type { Chapter } from "../../types/Chapter"
import { DialogType } from "../../types/DialogType"
import type { Dialog } from "../../types/Dialog"
import { Emotion } from "../../components/Avatar"
import { Tag } from "../../types/Tags"

const kevin = "Kevin\n(Mitschüler)"
const hrMorina = "Herr Morina\n(Lehrer)"

const rejoin_001: Dialog = {
    dialogType: DialogType.PlayerOptionDialog,
    choices: [
        {
            dialogType: DialogType.PlayerDialog,
            text: "Ich könnte während des Ausfluges auf sie achten, dann müssen Sie das nicht Herr Morina."
        },
        {
            dialogType: DialogType.PlayerDialog,
            text: "(Nichts sagen)"
        }
    ]
}

const mainChoice_001: Dialog = {
    dialogType: DialogType.NPCDialog,
    speaker: kevin,
    emotion: Emotion.sad,
    text: "Jetzt halt aber mal die Luft an! Die macht uns doch nur den Ausflug kaputt. Von mir aus sollte die gar nicht hier sein, sondern in eine Behindertenschule! Die sind ja schließlich für behinderte gemacht worden, kann doch nicht sein, dass die meint sie gehört hier her!",
    next: {
        dialogType: DialogType.PlayerDialog,
        text: "Schonmal daran gedacht wie verletzend deine Worte sind? Dir zuzuhören macht mich echt wütend! Vielleicht sollten wir lieber dich hier lassen!",
        next: {
            dialogType: DialogType.NPCDialog,
            speaker: hrMorina,
            emotion: Emotion.neutral,
            text: "Das reich jetzt ihr beiden!\nEs ist ja schön, wenn du dich für Anna einsetzen willst aber so hilfst du der Situation nicht.",
            next: {
                dialogType: DialogType.NarratorDialog,
                text: "Anna ist die Situation sichtlich unangenehm.\nDer Rest der Klasse folgt schweigend der Diskussion.",
                next: rejoin_001
            }
        }
    }
}

const mainChoice_002: Dialog = {
    dialogType: DialogType.NarratorDialog,
    text: "Anna lächelt dir dankbar zu."
}

const mainChoice_003: Dialog = {
    dialogType: DialogType.NPCDialog,
    speaker: kevin,
    emotion: Emotion.sad,
    text: "Ist besser, wenn die daheim bleibt, die nervt doch eh nur. Und außerdem vermisst die eh niemand."
}

export const behinderung: Chapter = {
    title: "Der Waldausflug",
    tags: [Tag.behinderung],
    headDialog: {
        dialogType: DialogType.NarratorDialog,
        text: "Deine Klasse plant einen Wandertag in den Wald. Deine Klassenkameradin Anna ist blind und der Lehrer möchte sie deshalb nicht mitnehmen.\nIm Unterricht redet ihr darüber.",
        next: {
            dialogType: DialogType.NPCDialog,
            emotion: Emotion.sad,
            speaker: hrMorina,
            text: "Ich kann das nicht verantworten dich mitzunehmen Anna.\nDu kannst dich im Wald leider nicht alleine zurechtfinden.",
            next: {
                dialogType: DialogType.PlayerOptionDialog,
                choices: [
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Was soll das denn? Ist Anna nicht Teil unserer Klasse? Hat sie kein Recht darauf die selben Dinge zu lernen wie wir?\nUnd sowas nennt sich Lehrer!",
                        next: mainChoice_001
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "Ich könnte während des Ausfluges auf sie achten.",
                        next: mainChoice_002
                    },
                    {
                        dialogType: DialogType.PlayerDialog,
                        text: "(nichts sagen)",
                        next: mainChoice_003
                    }
                ]
            }
        }
    }
}
