import {Component, OnInit} from '@angular/core';
import {RosService} from './services/RosService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  velocityLinearY: number;
  velocityLinearX: number;
  velocityLinearZ: number;
  velocityAngularX: number;
  velocityAngularY: number;
  velocityAngularZ: number;

  constructor(private ros: RosService) {

  }

  ngOnInit(): void {
    this.velocityLinearX = 0;
    this.velocityLinearY = 0;
    this.velocityLinearZ = 0;
    this.velocityAngularX = 0;
    this.velocityAngularY = 0;
    this.velocityAngularZ = 0;
  }

  startRos(): void {
    this.ros.getVelocityObservable().subscribe(velocity => {
      this.velocityLinearX = velocity.linear.x;
      this.velocityLinearY = velocity.linear.y;
      this.velocityLinearZ = velocity.linear.z;

      this.velocityAngularX = velocity.angular.x;
      this.velocityAngularY = velocity.angular.y;
      this.velocityAngularZ = velocity.angular.z;
    });
  }
}
