export class CameraInfo {
  private _height : number;
  private _width : number;
  private _distortion_model : string;

  constructor(height: number, width: number, distortion_model: string) {
    this._height = height;
    this._width = width;
    this._distortion_model = distortion_model;
  }

  static getInstanceFromMessage(message: any): CameraInfo {
    const height = message['height'];
    const width = message['width'];
    const distortion_model = message['distortion_model'];

    return new CameraInfo(height, width, distortion_model);
  }

  get height(): number {
  return this._height;
  }

  get width(): number {
    return this._width;
  }

  get distortion_model(): string {
    return this._distortion_model;
  }
}