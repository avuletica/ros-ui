import {Point} from './Point';


export class Twist {
  private _linear: Point;
  private _angular: Point;

  private constructor(linear: Point, angular: Point) {
    this._linear = linear;
    this._angular = angular;
  }

  static getInstanceFromMessage(message: any): Twist {
    const linear =  message['linear'];
    const angular = message['angular'];
    return new Twist(
      new Point(linear['x'], linear['y'], linear['z']),
      new Point(angular['x'], angular['y'], angular['z']));
  }

  get linear(): Point {
    return this._linear;
  }

  get angular(): Point {
    return this._angular;
  }
}


