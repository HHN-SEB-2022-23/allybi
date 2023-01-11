/**
 * Tags are used to classify chapters.
 * @enum
 */
export class Tag<S extends string = string> {
    public static readonly diskriminierungstyp1 = new Tag(
        "Diskriminierungstyp 1"
    )

    public static readonly geschlecht = new Tag(
        "Geschlecht"
    )

    public static readonly sexualitaet = new Tag(
        "Sexualität"
    )

    private readonly _display: S

    private constructor(display: S) {
        this._display = display
    }

    public toString(): S {
        return this._display
    }

    public [Symbol.toPrimitive](): S {
        return this._display
    }
}
