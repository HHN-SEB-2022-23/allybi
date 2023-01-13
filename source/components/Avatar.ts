import { createAvatar } from "@dicebear/core"
import { botttsNeutral } from "@dicebear/collection"
import { createElement, useEffect, useState } from "react"
import { Options } from "@dicebear/bottts-neutral"

export enum Emotion {happy, neutral, sad}

type Props = {
    className?: string,
    seed: string,
    emotion: Emotion
}

export const Avatar = (props: Props) => {
    const avatar = createAvatar(botttsNeutral, { seed: props.seed, ...emotion(props.emotion) })

    const [src, setSrc] = useState("")

    useEffect(() => {
        if (src) {
            return
        }

        avatar.toDataUri()
            .then(setSrc)
    })

    return createElement(
        "img",
        {
            className: props.className,
            src: src,
            decode: "async"
        }
    )
}

const emotion = (emotion: Emotion): Partial<Options> => {
    switch (emotion) {
    case Emotion.happy: return {
        mouth: ["smile01", "smile02"],
        eyes: ["bulging", "eva", "frame1", "frame2", "glow", "happy", "hearts", "robocop", "round", "roundFrame01", "roundFrame02", "sensor", "shade01"]
    }
    case Emotion.neutral: return {
        mouth: ["bite", "diagram", "grill01", "grill02", "grill03", "square01", "square02"],
        eyes: ["bulging", "eva", "frame1", "frame2", "glow", "happy", "hearts", "robocop", "round", "roundFrame01", "roundFrame02", "sensor", "shade01"]
    }
    case Emotion.sad: return {
        mouth: ["diagram", "grill01", "square01", "square02"],
        eyes: ["dizzy"]
    }
    }
}
