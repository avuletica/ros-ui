import { Component, OnInit } from '@angular/core';
declare function MJPEGCANVAS(): any;

@Component({
  selector: 'app-camview',
  templateUrl: './camview.component.html',
  styleUrls: ['./camview.component.css']
})
export class CamviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Create the main viewer.

    var viewer = new MJPEGCANVAS.Viewer({
      divID : 'mjpeg',
      host : 'localhost',
      width : 640,
      height : 480,
      topic : '/camera/rgb/image_raw',
      interval : 25,
      quality: 70
    });
  }
}
