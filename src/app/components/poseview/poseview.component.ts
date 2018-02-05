import { Component, OnInit } from '@angular/core';
import { RosService } from '../../services/RosService';

@Component({
  selector: 'app-poseview',
  templateUrl: './poseview.component.html',
  styleUrls: ['./poseview.component.css']
})
export class PoseviewComponent implements OnInit {

  private maxDist = 512;
  private axisColor = 'rgb(72, 51, 234)';
  private turtlebotColor = 'rgb(220,86,1)';
  private scale = 20;

  constructor(ros: RosService) {

    ros.getPoseObservable().subscribe(event => {    
      const canvas = <HTMLCanvasElement> document.getElementById('canvas-poseview');
      const ctx    = canvas.getContext('2d');
      const xPosition = event.position.x;
      const yPosition = event.position.y;
      const orientation = event.orientation;
      const actualX = this.getActualAxisPosition(xPosition);
      const actualY = this.getActualAxisPosition(yPosition);
      const angle = this.calculateAngle(orientation);
      this.setScaleIfOutOfBounds(actualX, actualY, canvas);
      this.drawCartesian(canvas);
      this.drawTurtlebot(ctx, actualX, actualY, angle);
    }); }

  ngOnInit() {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-poseview');
    const ctx    = canvas.getContext('2d');
  }

  private drawCartesian(canvas) {
    const ctx = canvas.getContext('2d');
    const ctxWidth = canvas.width;
    const ctxHeight = canvas.height;
    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    ctx.save();

    this.drawXaxis(ctx, ctxWidth, ctxHeight);
    this.drawYaxis(ctx, ctxWidth, ctxHeight);
    ctx.restore();
  }

  private drawXaxis(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = this.axisColor;
    ctx.lineWidth = 1;
    ctx.moveTo(0,height/2);
    ctx.lineTo(width, height/2);

    let i : number;
    for (i = -20; i < 20; i++) {
      ctx.moveTo(width/2 + 2*i*this.scale, height/2 - 3);
      ctx.lineTo(width/2 + 2*i*this.scale, height/2 + 3);
    }

    ctx.stroke();
  }

  private drawYaxis(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = this.axisColor;
    ctx.lineWidth = 1;
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2,height);

    let i : number;
    for (i = -20; i < 20; i++) {
      ctx.moveTo(width/2 - 3, height/2 + 2*i*this.scale);
      ctx.lineTo(width/2 + 3, height/2 + 2*i*this.scale);
    }

    ctx.stroke();
  }

  private drawTurtlebot(ctx, x, y, angle) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.turtlebotColor;
    ctx.strokeStyle = this.turtlebotColor;
    ctx.lineWidth = 3;

    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 12 * Math.cos(angle), y + 12 * Math.sin(angle));
    ctx.stroke();
    ctx.fill();
  }

  // Transform quaternion angle to Euler angle. We only need rotation around z axis
  private calculateAngle(q) {
    const siny = +2.0 * (q.w * q.z + q.x * q.y);
    const cosy = +1.0 - 2.0 * (q.y * q.y + q.z * q.z);  
    const angle = Math.atan2(siny, cosy);

    return angle;
  }

  private getActualAxisPosition(pos) : number {
    return pos * this.scale + this.maxDist/2;
  }

  private setScaleIfOutOfBounds(x, y, canvas) {
    if ((x > canvas.width - 15 || y > canvas.height - 15 || x < 15 || y < 15) && this.scale > 1) {
      this.scale = this.scale - 0.01;
    }
  }
}
