export class BumperEvent {
  /*  *** bumper ***
      LEFT   = 0
      CENTER = 1
      RIGHT  = 2
  */

  /*  *** state ***
      RELEASED = 0
      PRESSED  = 1
   */
  private _bumper: number;
  private _state: number;

  private constructor(bumper: number, state: number) {
    this._bumper = bumper;
    this._state = state;
  }

  static getInstanceFromMessage(message: any): BumperEvent {
    const bumper = message['bumper'];
    const state = message['state'];

    return new BumperEvent(bumper, state);
  }

  get bumper(): number {
    return this._bumper;
  }

  get state(): number {
    return this._state;
  }
}
