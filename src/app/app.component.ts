import {Component, OnInit} from '@angular/core';
import {RosService} from './services/RosService';
import {Pose} from './models/Pose';
import {Twist} from './models/Twist';
import {BumperEvent} from './models/BumperEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  velocity: Twist;
  position: Pose;
  bumper: BumperEvent;

  constructor(private ros: RosService) {

  }

  ngOnInit(): void {
    this.ros.getVelocityObservable().subscribe(data => this.velocity = data);
    this.ros.getPositionObservable().subscribe(data => this.position = data);
    this.ros.getBumperObservable().subscribe(data => this.bumper = data);
  }
}
