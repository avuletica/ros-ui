import { Component, OnInit } from '@angular/core';
import {RosService} from '../../services/RosService';
import {Twist} from '../../models/Twist';
import {RandomService} from '../../services/RandomService';

@Component({
  selector: 'app-speed-widget',
  templateUrl: './speed-widget.component.html',
  styleUrls: ['./speed-widget.component.css']
})
export class SpeedWidgetComponent implements OnInit {
  private maxSpeed = 0.2;
  velocity: Twist;
  speedLabel = 'SPEED';
  randomOne = 10;
  randomTwo = 10;
  randomThree = 10;
  randomFour = 10;

  constructor(ros: RosService, randomService: RandomService) {
    ros.getVelocityObservable().subscribe(speed => {
      this.drawSpeedometer(speed.linear.x);
      this.velocity = speed;
    });

    randomService.getRandomGeneratorObservable(10, 100)
      .subscribe(rand => this.randomOne = rand);
    randomService.getRandomGeneratorObservable(10, 1000)
      .subscribe(rand => this.randomTwo = rand);
    randomService.getRandomGeneratorObservable(100, 1000)
      .subscribe(rand => this.randomThree = rand);
    randomService.getRandomGeneratorObservable(100, 1000)
      .subscribe(rand => this.randomFour = rand);
  }

  ngOnInit() {
    this.drawSpeedometer(0);
  }

  private drawSpeedometer(velocity: number) {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-speed');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, -852.362140);

    const speedLevel = (Math.abs(velocity) / this.maxSpeed) * 6;
    this.drawSpeed(speedLevel, ctx);

    // #path4209
    ctx.save();
    ctx.beginPath();
    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 852.362140);
    ctx.fillStyle = 'rgb(211, 213, 98)';
    ctx.moveTo(5.898438, 89.136719);
    ctx.lineTo(5.898438, 97.890625);
    ctx.bezierCurveTo(5.898438, 98.702410, 6.203647, 99.470433, 6.742188, 100.164060);
    ctx.bezierCurveTo(6.225665, 101.707860, 5.935547, 103.356150, 5.935547, 105.078120);
    ctx.lineTo(5.935547, 154.160160);
    ctx.bezierCurveTo(5.935547, 162.696820, 12.807089, 169.568360, 21.343750, 169.568360);
    ctx.lineTo(87.500000, 169.568360);
    ctx.bezierCurveTo(96.036661, 169.568360, 102.910160, 162.696820, 102.910160, 154.160160);
    ctx.lineTo(102.910160, 105.078120);
    ctx.bezierCurveTo(102.910160, 104.522150, 102.877170, 103.975960, 102.820310, 103.435550);
    ctx.lineTo(281.421880, 103.435550);
    ctx.bezierCurveTo(286.743250, 103.435550, 291.027340, 100.962540, 291.027340, 97.890625);
    ctx.lineTo(291.027340, 89.136719);
    ctx.lineTo(5.898438, 89.136719);
    ctx.fill();
    ctx.restore();
    ctx.restore();
  }

  private drawSpeed(speed: number, ctx: CanvasRenderingContext2D) {
    this.speedLabel = 'SPEED';

    if (speed >= 1) {
      // #rect3336
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(211, 213, 98)';
      ctx.rect(5.881776, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }

    if (speed >= 2) {
      // #rect3336-3
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(213, 188, 79)';
      ctx.rect(54.387009, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }

    if (speed >= 3) {
      // #rect3336-6
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(215, 162, 59)';
      ctx.rect(102.892230, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }

    if (speed >= 4) {
      // #rect3336-6-7
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(216, 137, 40)';
      ctx.rect(151.397460, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }

    if (speed >= 5) {
      // #rect3336-6-7-5
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(218, 111, 20)';
      ctx.rect(199.902710, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }

    if (speed >= 6) {
      // #rect3336-6-7-3
      this.speedLabel = 'WARP SPEED!';
      ctx.beginPath();
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1.000000;
      ctx.fillStyle = 'rgb(220, 86, 1)';
      ctx.rect(248.407940, 865.533940, 42.605576, 80.207069);
      ctx.fill();
    }
  }

}
