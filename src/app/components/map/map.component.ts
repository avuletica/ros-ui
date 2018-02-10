import { Component, OnInit } from '@angular/core';
import * as ROSLIB from 'roslib';
import {Ros, Topic} from 'roslib';
import { RosService } from '../../services/RosService';
declare const ROS2D: any;
declare const NAV2D: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(ros: RosService) {
    ros.getVelocityObservable().subscribe(data => {
    });
  }

  ngOnInit() {
    this.drawMap();
  }

  drawMap() {
    const ros = new ROSLIB.Ros({url: 'ws://localhost:9090'});

    // Create the main viewer.
    const viewer = new ROS2D.Viewer({
      divID : 'nav',
      width : 512,
      height : 512
    });

    const nav = new NAV2D.OccupancyGridClientNav({
      ros : ros,
      rootObject : viewer.scene,
      viewer : viewer,
      topic : '/map',
      robot_pose : '/robot_pose',
      continuous: true,
    });
  }

}
