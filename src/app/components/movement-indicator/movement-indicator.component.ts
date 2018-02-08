import { Component, OnInit } from '@angular/core';
import { RosService } from '../../services/RosService';
import { Twist } from '../../models/Twist';

@Component({
  selector: 'app-movement-indicator',
  templateUrl: './movement-indicator.component.html',
  styleUrls: ['./movement-indicator.component.css'],
})
export class MovementIndicatorComponent implements OnInit {

  private velocity : Twist;

  constructor(ros : RosService) { 
    ros.getVelocityObservable().subscribe(speed => {
      this.velocity = speed;
    });
  }

  ngOnInit() {
  }
}
