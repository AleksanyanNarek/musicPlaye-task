# React Music Player Interface with Music Upload Form

#### This is a music player interface which includes list of songs and form for users to upload music files from their computer.

## How to run the application locally
1) Download project
2) Open terminal and run `npm install`
3) Then run `npm start` in terminal and run app
4) Run `npm run test` to run tests

## The components structure
App ( main component ) - 3 children "Header", "SongList" and "MusicUploadForm"

SongList - one child "SongRow"Consider using the React Context API or Redux if global state management
becomes necessary.

## State management
API is not yet available so I save data in data.js file and import it in App.js and put on state.

Using the React Context API or Redux don't necessary.
