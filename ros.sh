#!/bin/sh

# In gnome-terminal, go to Edit -> Profile Preferences -> Title.
# Click the Command tab. Select Hold the terminal from the drop-down menu labelled When command exits.
# You should create a new profile named test

gnome-terminal --window-with-profile=test -e roscore

gnome-terminal --window-with-profile=test -x bash -c "roslaunch turtlebot_gazebo turtlebot_world.launch" 

gnome-terminal --window-with-profile=test -x bash -c "roslaunch turtlebot_rviz_launchers view_robot.launch"

gnome-terminal --window-with-profile=test -x bash -c "roslaunch turtlebot_teleop keyboard_teleop.launch"
