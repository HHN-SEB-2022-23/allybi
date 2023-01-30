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

    public static readonly alter = new Tag(
        "Alter", 3
    )

    public static readonly aussehen = new Tag(
        "Aussehen", 4
    )

    public static readonly behinderung = new Tag(
        "Behinderung", 5
    )

    public static readonly herkunft = new Tag(
        "Herkunft", 6
    )

    public static readonly religion = new Tag(
        "Religion", 7
    )

    public static readonly sozialerStatus = new Tag(
        "Sozialer Status", 8
    )

    public static readonly values = [
        Tag.geschlecht,
        Tag.sexualitaet,
        Tag.alter,
        Tag.aussehen,
        Tag.behinderung,
        Tag.religion,
        Tag.herkunft,
        Tag.sozialerStatus,
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
