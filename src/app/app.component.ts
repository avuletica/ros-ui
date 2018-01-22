import {Component} from '@angular/core';
import * as ROSLIB from 'roslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  test(): void {
    console.log('Running ROSLIB HERE .... ');

    const ros = new ROSLIB.Ros({url: 'ws://localhost:9090'});

    // If there is an error on the backend, an 'error' emit will be emitted.
    ros.on('error', function(error) {
      console.log(error);
    });

    // Find out exactly when we made a connection.
    ros.on('connection', function() {
      console.log('Connection made!');

      // If we made a connection, subscribe to velocity topic
      const listener = new ROSLIB.Topic({
        ros: ros,
        name: '/mobile_base/commands/velocity',
        messageType: 'geometry_msgs/Twist'
      });
  
      listener.subscribe(function (message) {
        // Print out the velocity to the console
        console.log('Received linear speed message on ' + listener.name + ': ' + message.linear.x);
  
        // If desired, we can unsubscribe from the topic as well.
        // listener.unsubscribe();
      });

    });

    ros.on('close', function() {
      console.log('Connection closed.');
    });
  }
}
