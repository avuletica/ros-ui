import {Component} from '@angular/core';
import {RosService} from './services/RosService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ros: RosService) {

  }

  test(): void {
    this.ros.getVelocityObservable().subscribe(velocity => {
      console.log(velocity.linear.y, velocity.linear.x);
    });
  }
}
