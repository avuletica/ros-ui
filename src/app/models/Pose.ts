import {Orientation} from './Orientation';
import {Point} from './Point';

export class Pose {
  private _orientation: Orientation;
  private _position: Point;

  private constructor(orientation: Orientation, position: Point) {
    this._orientation = orientation;
    this._position = position;
  }

  static getInstanceFromMessage(message: any): Pose {
    const orientation = message['orientation'];
    const position = message['position'];
    return new Pose(
      new Orientation(orientation['x'], orientation['y'], orientation['z'], orientation['w']),
      new Point(position['x'], position['y'], position['z']));
  }

  get orientation(): Orientation {
    return this._orientation;
  }

  get position(): Point {
    return this._position;
  }
}
