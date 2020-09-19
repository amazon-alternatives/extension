# Amazon Alternatives [![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://ecologi.com/adrian)

_(previously known as Universal Amazon Killer)_

This is a browser extension to help you buy stuff you found in Amazon, but in other stores (like a real-life bookstore or an online Amazon alternative).

Additionaly, the addon will show you a prompt everytime you wan't to buy on Amazon instead of one of his alternatives.

![The addon in action](/buy-a-book.gif)

### Features

- Shows a list of alternative stores
- Multi-langage
- Multi-country
- Typescript-based, no external library
- Universal compatibility for all major browsers (except Safari) in a single codebase : Chrome, Firefox, Edge, Opera, Brave and Vivaldi

### Where to install it

- Chrome : [https://chrome.google.com/webstore/detail/amazon-alternatives/hcjifkchlbbpcpmdbimipoidnljabnai](https://chrome.google.com/webstore/detail/amazon-alternatives/hcjifkchlbbpcpmdbimipoidnljabnai)
- Firefox : [https://addons.mozilla.org/addon/amazon-alternatives/](https://addons.mozilla.org/addon/amazon-alternatives/)

### How to contribute

- Install the packages with `yarn install`
- Modify the files in the `src` folder
- You can build the extension with `yarn build` to test your modifications in the browser
- When everything's done, you can send a PR \o/

### How to build the extension

#### Requirements

- **Operating system:** OSX, Linux, Windows
- **Environment requirements:** [Node 10+](https://nodejs.org/en/)

#### Steps

- Clone or download the repository from [Github](https://github.com/adriantombu/universal-amazon-killer)
- Install the packages with `yarn install` or `npm install`
- Run `yarn build` or `npm build` to compile the files
- The files inside the `src` folder will be builded to the `addon` folder with Weback (you can find the configuration used in the `webpack.config.js` and `tsconfig.json` files)
- The `addon` folder represents the files that are published to the store through the Continuous Deployment tool
