export class Tag<S extends string = string> {
  public static readonly diskriminierungstyp1 = new Tag(
    "Diskriminierungstyp 1"
  );

  private readonly _display: S;

  private constructor(display: S) {
    this._display = display;
  }

  public toString(): S {
    return this._display;
  }

  public [Symbol.toPrimitive](): S {
    return this._display;
  }
}
