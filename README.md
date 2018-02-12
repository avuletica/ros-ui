# Ros UI

<img src="https://i.imgur.com/k0yb9mD.png" width="700">

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## How to set up ROS environment

* Start master node: `roscore`

* Launch gazebo with turtlebot world: `roslaunch turtlebot_gazebo turtlebot_world.launch`

* Launch gazebo mapping: `roslaunch turtlebot_gazebo gmapping_demo.launch`

* Start keyboard_teleop for turtlebot: `roslaunch turtlebot_teleop keyboard_teleop.launch`

* Start rosbridge_server: `roslaunch rosbridge_server rosbridge_websocket.launch`

* Start web_videoserver: `rosrun web_video_server web_video_server`

* Start pose publisher: `rosrun robot_pose_publisher robot_pose_publisher`
