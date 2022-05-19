# Social-Network-API

## About
This is an API for a social network app that can store users and thier "thoughts". These users can set other users as friends and make "reactions" to other users' thoughts. This app runs with node js. Please access the API at https://github.com/Famesmyname/Social-Network-API. 

## Instructions

To get the app running:

- Open the terminal
- Initialize with "npm init -y"
- Install all dependencies with "npm i"
- Start your mongoDB database server.
- If seed data is required, run "npm run seed" in the terminal.
- To start the app, run "npm start" in the terminal.

For a demonstration of the functionality of the API please view this video:
https://youtu.be/MyeQOe-NhGk.

At the moment, the following functionlity exists for these categories.

- USER : add new, modify current and delete user
- THOUGHT : add new, modify current and delete thought
- REACTION : add new and delete reaction
- FRIEND : add current user as friend to another user and remove friend from a user's list.

## Contact

For any questions please contact via github linked above or at edwinfame@yahoo.com

## Version History

0.5  Basic functionality and structure. USER, THOUGHTS have POST, PUT and DELETE
0.6  Added reactions
0.9  Bug fixes and added friend list functionality.
1.0  Bug fixes and full functionality 