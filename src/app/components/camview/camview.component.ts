import {Component, OnInit} from '@angular/core';
import { RosService } from '../../services/RosService';
import { CameraInfo } from '../../models/CameraInfo';
declare const MJPEGCANVAS: any;

@Component({
  selector: 'app-camview',
  templateUrl: './camview.component.html',
  styleUrls: ['./camview.component.css']
})
export class CamviewComponent implements OnInit {

  private camInfo : CameraInfo;

  constructor(ros: RosService) {
    ros.getCamInfoObservable().subscribe(camInfo => {
      this.camInfo = camInfo;
    });
  }

  ngOnInit() {
    // Create the main viewer.
    const viewer = new MJPEGCANVAS.Viewer({
      divID: 'mjpeg',
      host: 'localhost',
      width: 640,
      height: 480,
      topic: '/camera/rgb/image_raw',
      interval: 25,
      quality: 70
    });
  }
}
