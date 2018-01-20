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

    // Create a connection to the rosbridge WebSocket server.
    ros.connect('ws://localhost:9090');

    // Publishing a Topic
    // ------------------

    // First, we create a Topic object with details of the topic's name and message type.
    const cmdVel = new ROSLIB.Topic({
      ros: ros,
      name: '/cmd_vel',
      messageType: 'geometry_msgs/Twist'
    });

    // Then we create the payload to be published. The object we pass in to ros.Message matches the
    // fields defined in the geometry_msgs/Twist.msg definition.
    const twist = new ROSLIB.Message({
      linear: {
        x: 0.1,
        y: 0.2,
        z: 0.3
      },
      angular: {
        x: -0.1,
        y: -0.2,
        z: -0.3
      }
    });

    // And finally, publish.
    cmdVel.publish(twist);

    // Subscribing to a Topic
    // ----------------------

    // Like when publishing a topic, we first create a Topic object with details of the topic's name
    // and message type. Note that we can call publish or subscribe on the same topic object.
    const listener = new ROSLIB.Topic({
      ros: ros,
      name: '/listener',
      messageType: 'std_msgs/String'
    });

    // Then we add a callback to be called every time a message is published on this topic.
    listener.subscribe(function (message) {
      console.log('Received message on ' + listener.name + ': ' + message);

      // If desired, we can unsubscribe from the topic as well.
      listener.unsubscribe();
    });
  }
}
