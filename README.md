<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Normaly0/drum_machine"> <img alt="node-current" src="https://img.shields.io/node/v/v"> <img alt="npm version" src="https://img.shields.io/badge/npm-v8.1.0-blue"> <img alt="license" src="https://img.shields.io/badge/License-GPL%20-orange">

# :drum: Drum Machine App

A drum machine SPA allows you to operate it both with your keyboard and mouse including an adjustable volume slider, display to show the sound that was played last, as well as power button to enable it's functionalities.

Check out a live version [here](https://codepen.io/Normaly0/full/KKyXdoY)!

## :mag: About

This application was built using the react framework and it's class based component system.
All it's functionalities rely on the application managing and changing its own state based on the user's input.

It was quite interesting to fully rely on react to solve the challenges that I've faced throughout this project instead of combining it with redux, the biggest one most likely being making the drum machine operable via keyboard and mouse, without that leading to bugs.
Therefore all functionalities of the page are bundled together in one file rather than spread out over several files.

## :clipboard: Ideas

- implement a loop system
- design overhaul
- create a second sound deck that could be swapped around


## :wrench: How To Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Therefore make sure that you have [Node.js](https://nodejs.org/en/) installed.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

For more information check out the [React documentation](https://reactjs.org/)!
