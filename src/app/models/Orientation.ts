export class Orientation {
  private _x: number;
  private _y: number;
  private _z: number;
  private _w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get z(): number {
    return this._z;
  }

  get w(): number {
    return this._w;
  }
}
