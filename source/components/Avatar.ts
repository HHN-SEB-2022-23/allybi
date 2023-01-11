import { createAvatar } from "@dicebear/core"
import { botttsNeutral } from "@dicebear/collection"
import { createElement, useEffect, useState } from "react"

type Props = {
    className?: string,
    seed: string
}

export const Avatar = (props: Props) => {
    const avatar = createAvatar(botttsNeutral, { seed: props.seed })

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
