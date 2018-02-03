import { Component, OnInit } from '@angular/core';
import {RosService} from '../../services/RosService';

@Component({
  selector: 'app-bumpers',
  templateUrl: './bumpers.component.html',
  styleUrls: ['./bumpers.component.css']
})
export class BumpersComponent implements OnInit {

  private bumperColor = 'rgb(244,67,54)';
  private leftBumperState = 0;
  private rightBumperState = 0;
  private centerBumperState = 0;

  constructor(ros: RosService) {
    ros.getBumperObservable().subscribe(event => {
      if (event.bumper === 0) {
        this.leftBumperState = event.state;
      } else if (event.bumper === 1) {
        this.centerBumperState = event.state;
      } else if (event.bumper === 2) {
        this.rightBumperState = event.state;
      }

      this.drawTurtlebot();
    });
  }

  ngOnInit() {
    this.drawTurtlebot();
  }

  private drawTurtlebot() {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-bumpers');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, -852.362230);
    this.drawBody(ctx);

    if (this.leftBumperState === 1) {
      this.drawLeftBumper(ctx);
    }
    if (this.rightBumperState === 1) {
      this.drawRightBumper(ctx);
    }
    if (this.centerBumperState === 1) {
      this.drawCenterBumper(ctx);
    }

    ctx.restore();
  }

  private drawBody(ctx: CanvasRenderingContext2D) {
    // #path4152
    ctx.beginPath();
    ctx.fillStyle = 'rgb(72, 51, 234)';
    ctx.moveTo(182.287380, 962.375310);
    ctx.translate(100.231380, 962.375355);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960318);
    ctx.arc(0.000000, 0.000000, 82.056000, -0.000001, 1.55797693, false);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-100.231380, -962.375355);
    ctx.translate(100.231378, 962.375355);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960318);
    ctx.arc(0.000000, 0.000000, 82.056000, 1.557977, 3.11595444, false);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-100.231378, -962.375355);
    ctx.translate(100.231377, 962.375303);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960318);
    ctx.arc(0.000000, 0.000000, 82.056000, 3.115954, 4.67393063, false);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-100.231377, -962.375303);
    ctx.translate(100.231376, 962.375303);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960318);
    ctx.arc(0.000000, 0.000000, 82.056000, -1.609255, -0.05127783, false);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-100.231376, -962.375303);
    ctx.fill();

    // #path4204
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(137.425270, 1025.728300);
    ctx.lineTo(64.317651, 1026.467400);
    ctx.lineTo(27.123762, 963.523890);
    ctx.lineTo(63.037487, 899.841290);
    ctx.lineTo(136.145100, 899.102190);
    ctx.lineTo(173.338990, 962.045690);
    ctx.fill();
  }

  private drawLeftBumper(ctx: CanvasRenderingContext2D) {
    // #path4217
    ctx.beginPath();
    ctx.fillStyle = this.bumperColor;
    ctx.moveTo(26.156185, 1018.484900);
    ctx.lineTo(26.156185, 905.372120);
    ctx.translate(83.195868, 962.019965);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, -2.339399, -3.16589695, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-83.195868, -962.019965);
    ctx.translate(83.190888, 961.832431);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, 3.114908, 2.33931420, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-83.190888, -961.832431);
    ctx.fill();
  }

  private drawCenterBumper(ctx: CanvasRenderingContext2D) {
    // #path4213
    ctx.beginPath();
    ctx.fillStyle = this.bumperColor;
    ctx.moveTo(174.435690, 907.279810);
    ctx.lineTo(174.435690, 1019.351700);
    ctx.translate(116.809077, 963.254351);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, 0.792196, 0.00053121, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-116.809077, -963.254351);
    ctx.lineTo(198.757340, 959.257520);
    ctx.translate(116.813792, 963.381626);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, -0.052360, -0.79227638, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-116.813792, -963.381626);
    ctx.fill();
  }

  private drawRightBumper(ctx: CanvasRenderingContext2D) {
    // #path4206
    ctx.beginPath();
    ctx.fillStyle = this.bumperColor;
    ctx.moveTo(96.615754, 873.042220);
    ctx.translate(99.918523, 951.778178);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, -1.611057, -2.30443896, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-99.918523, -951.778178);
    ctx.lineTo(154.580710, 893.250380);
    ctx.translate(99.649227, 951.788170);
    ctx.rotate(0.000000);
    ctx.scale(1.000000, 0.960317);
    ctx.arc(0.000000, 0.000000, 82.056005, -0.837343, -1.60777307, true);
    ctx.scale(1.000000, 1.041322);
    ctx.rotate(-0.000000);
    ctx.translate(-99.649227, -951.788170);
    ctx.fill();
  }


}
