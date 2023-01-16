/**
 * Tags are used to classify chapters.
 * @enum
 */
export class Tag<S extends string = string> {
    public static readonly geschlecht = new Tag(
        "Geschlecht", 1
    )

    public static readonly sexualitaet = new Tag(
        "Sexualität", 2
    )

    public static readonly values = [
        Tag.geschlecht,
        Tag.sexualitaet
    ]

    private readonly _display: S
    public readonly id: number

    private constructor(display: S, id: number) {
        this._display = display
        this.id = id
    }

    public toString(): S {
        return this._display
    }

    public [Symbol.toPrimitive](): S {
        return this._display
    }
}
