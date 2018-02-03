import {Injectable} from '@angular/core';

import {Twist} from '../models/Twist';
import * as ROSLIB from 'roslib';
import {Ros, Topic} from 'roslib';
import {Pose} from '../models/Pose';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RosService {
  private _twistSubject: Subject<Twist>;
  private _poseSubject: Subject<Pose>;

  constructor() {
    this._twistSubject = new Subject<Twist>();
    this._poseSubject = new Subject<Pose>();
    this.setupRos();
  }

  public getVelocityObservable(): Observable<Twist> {
    return this._twistSubject.asObservable();
  }

  public getPositionObservable(): Observable<Pose> {
    return this._poseSubject.asObservable();
  }

  private setupRos() {
    const ros = new ROSLIB.Ros({url: 'ws://localhost:9090'});

    ros.on('error', function (error) {
      console.error(error);
    });

    ros.on('connection', () => {
      console.log('Connection made!');

      RosService
        .listenTo(ros, '/odom', 'nav_msgs/Odometry')
        .subscribe(message => {
          const pose = Pose.getInstanceFromMessage(message);
          this._poseSubject.next(pose);
        });

      RosService
        .listenTo(ros, '/mobile_base/commands/velocity', 'geometry_msgs/Twist')
        .subscribe(message => {
          const twist = Twist.getInstanceFromMessage(message);
          this._twistSubject.next(twist);
        });
    });

    ros.on('close', function () {
      console.log('Connection closed.');
    });
  }

  private static listenTo(ros: Ros, name: string, message: string): Topic {
    return new ROSLIB.Topic({
      ros: ros,
      name: name,
      messageType: message
    });
  }

}
