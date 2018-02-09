# RosUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How to set up ROS environment

* Start master node: `roscore`

* Launch gazebo with turtlebot world: `roslaunch turtlebot_gazebo turtlebot_world.launch`

* Launch gazebo mapping: `roslaunch turtlebot_gazebo gmapping_demo.launch`

* Start keyboard_teleop for turtlebot: `roslaunch turtlebot_teleop keyboard_teleop.launch`

* Start rosbridge_server: `roslaunch rosbridge_server rosbridge_websocket.launch`

* Start web_videoserver: `rosrun web_video_server web_video_server`

* Start pose publisher: `rosrun robot_pose_publisher robot_pose_publisher`
