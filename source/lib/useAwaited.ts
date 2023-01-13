import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const doNothing = () => { }

const hashAsync = async (str: string) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const buffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(buffer))
    return hashArray.map((b) => b.toString(36).padStart(2, "0")).join("")
}

export const useAwaited = <T, P extends T = T, A extends T = T>(promise: Promise<P>, beforeAwaited: A): T => {
    const [value, setValue] = useState<T>(beforeAwaited)
    const [lastHash, setLastHash] = useState("")

    useEffect(() => {
        promise
            .then(async (newValue) => {
                const newHash = await hashAsync(JSON.stringify(newValue))

                if (newHash !== lastHash) {
                    setLastHash(newHash)
                    setValue(newValue)
                }
            })
            .catch(doNothing)
    }, [promise])

    return value
}
