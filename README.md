# 2D Tiled image map

## How to run

You need to install [yarn](https://yarnpkg.com/lang/en/docs/install/) and add it to your PATH first.

Then you can just do `yarn install` to retrieve all the dependencies.

Finally, these are the provided commands:
  - `yarn start`: Will run the application in development mode, on http://localhost:3000/.
  - `yarn test`: Will run the test cases.

---

## Technologies used

  - The app was bootstrapped using [Create React App](https://github.com/facebook/create-react-app)
  - React - https://reactjs.org/
  - SASS - https://sass-lang.com/
  - react-testing-library - https://github.com/testing-library/react-testing-library

## Requirements

### Background

Commonly large datasets like maps (2D or 3D) are broken down into chunks with varying levels of detail. You will already be familiar with this concept in e.g. Google Maps, where you can zoom out to see the whole world in low detail. Zoom in and you can see your house. [This blog post](https://www.mapbox.com/help/how-web-maps-work/) provides a good overview.

### The Challenge

We've tiled a high res image into a set of tiles in the 'tiled' folder (un-tiled.jpg is just for reference). Create a simple frontend app in your framework of choice that displays them in the style of a 2D map view. The app should be self contained and simple for us to build and run (e.g. provide npm install/build/start).

### Tasks

All these are optional, just pick ones that you think will best demonstrate your current strengths.

* Basic functionality: Allow zooming using +/- buttons, allow scrolling when the content doesn't fit in the browser viewport.
* More advanced functionality: Panning rather than scrolling, only load what's visible in the viewport, smooth zooming, styling etc.
* Consider how your app is built.
* Consider coding style (e.g. robustness and maintainability).
* Block in some simple tests.
* Any other extensions you think would demonstrate your ninja coding skills.

That is a long list of things, and we are aware of the fact that your time is limited. Therefore, please let us know some of the tradeoffs that you have made, what you have focussed on and what you have ignored for now.
