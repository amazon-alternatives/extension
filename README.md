Universal Amazon Killer
=======================

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


This is a browser extension to help you buy a book you found in Amazon, but in a real-life bookstore.

The extension finds the ISBN of the book in the page, and launches a search in the "Place des libraires" database.

### Features
* Shows a list of bookstores
* Multi-langage
* Multi-country
* VanillaJs only, no jQuery
* Universal compatibility for all major browsers (except Safari) in a single codebase : Chrome, Firefox, Edge, Opera, Brave and Vivaldi

### Where to install it
* Chrome : https://chrome.google.com/webstore/detail/universal-amazon-killer/ckgenapkpilkbkkeijepjejgilglnmof
* Firefox : https://addons.mozilla.org/addon/universal-amazon-killer/

### How to contribute

* Install the packages with `yarn install`
* Modify the files in the `src` folder
* When everything's done, you can run `yarn zip` to build the `app.js` and `background.js` scripts and bundle all the files for release

### Project origin
This project is an enhanced rewrite of [Amazon Killer](https://github.com/elliotlepers/Amazon-Killer) from Elliot Lepers
