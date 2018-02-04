import { Component, OnInit } from '@angular/core';
import { RosService } from '../../services/RosService';

@Component({
  selector: 'app-poseview',
  templateUrl: './poseview.component.html',
  styleUrls: ['./poseview.component.css']
})
export class PoseviewComponent implements OnInit {

  private maxDist;
  private defaultMaxDist = 512;
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
      const angle = this.calculateAngle(orientation)

      this.maxDist = this.defaultMaxDist;
      // TODO: fix this, it's not working as it should
      if (this.maxDist < actualX || this.maxDist < actualY) {
        this.maxDist = this.maxDist * 2;
      }
      else if (this.maxDist >= this.defaultMaxDist * 2) {
        this.maxDist = this.maxDist / 2;
      }
      
      this.drawCartesian(canvas);
      this.drawTurtlebot(ctx, actualX, actualY, angle);
    }); }

  ngOnInit() {
  }

  private drawCartesian(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    // Retrieve the current canvas element dimensions
    const ctxWidth : number    = +canvas.getAttribute('width');
    const ctxHeight : number   = +canvas.getAttribute('height');

    this.drawXaxis(ctx, ctxWidth, ctxHeight);
    //drawXscale(ctxWidth,8);
    this.drawYaxis(ctx, ctxWidth, ctxHeight);
    //drawYscale();
    ctx.restore();
  }

  private drawXaxis(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = this.axisColor;
    ctx.moveTo(0,height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
  }

  private drawYaxis(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = this.axisColor;
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2,height);
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
}
