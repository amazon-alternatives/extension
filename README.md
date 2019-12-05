Universal Amazon Killer
=======================

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

This is a browser extension to help you buy a book you found in Amazon, but in a real-life bookstore.

The extension finds the ISBN of the book in the page, and launches a search in the "Place des libraires" database.

### Features
* Shows a list of bookstores
* Multi-langage
* Multi-country
* VanillaJs only, no jQuery
* Universal compatibility for all major browsers (except Safari) in a single codebase : Chrome, Firefox, Edge, Opera, Brave and Vivaldi

### Where to install it
* Chrome : https://chrome.google.com/webstore/detail/universal-amazon-killer/hcjifkchlbbpcpmdbimipoidnljabnai
* Firefox : https://addons.mozilla.org/addon/universal-amazon-killer/

### How to contribute

* Install the packages with `yarn install`
* Modify the files in the `src` folder
* You can build the extension with `yarn build` to test your modifications in the browser
* When everything's done, you can send a PR \o/

### How to build the extension

#### Requirements
* **Operating system:** OSX, Linux, Windows
* **Environment requirements:** [Node 10+](https://nodejs.org/en/)

#### Steps
* Clone or download the repository from https://github.com/adriantombu/universal-amazon-killer
* Install the packages with `yarn install` or `npm install`
* Run `yarn build` or `npm build`
* The files inside the `src` folder will be builded to the `addon` folder with Weback (you can find the configuration used in the `webpack.config.js` file)
* The `addon` folder represents the files that are published to the store through the Continuous Deployment tool
