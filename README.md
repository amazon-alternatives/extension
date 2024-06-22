# Amazon Alternatives

> [!IMPORTANT]  
> This repository has been archived beceause I don't have the time nor the resources to fully achieve what I wanted for this project. It's getting mentally hard to let it slowly die while seeing people complain it's not working as it should.
> 
> Doing what I have in mind would require months of full time work and over the 7 years I've maintained this project the total net income I've received is 0€.
> 
> I'm glad I could work so many years on this project, but it's now time to pull the plug. Thanks to the power of opensource, the GPL3 licenses allows anyone to fork it and work on an alternative.

This is a browser extension to help you buy stuff you found in Amazon, but in other stores (like a real-life bookstore or an online Amazon alternative).

![The addon in action](/buy-a-book.gif)

### Features

- Shows a list of alternative stores
- Multi-language
- Multi-country
- Typescript-based, no external library
- Universal compatibility for all major browsers (except Safari) in a single codebase : Chrome, Firefox, Edge, Opera, Brave and Vivaldi

### List of the alternatives

You can find a full list of the alternatives and their categories in the source code

- [amazon.ca](src/helpers/stores/ca.ts)
- [amazon.com](src/helpers/stores/com.ts)
- [amazon.de](src/helpers/stores/de.ts)
- [amazon.es](src/helpers/stores/es.ts)
- [amazon.fr](src/helpers/stores/fr.ts)
- [amazon.it](src/helpers/stores/it.ts)
- [amazon.co.uk](src/helpers/stores/co.uk.ts)

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

- Clone or download the repository from [Github](https://github.com/amazon-alternatives/extension)
- Install the packages with `yarn install` or `npm install`
- Run `yarn build` or `npm build` to compile the files
- The files inside the `src` folder will be builded to the `addon` folder with Weback (you can find the configuration used in the `webpack.config.js` and `tsconfig.json` files)
- The `addon` folder represents the files that are published to the store through the Continuous Deployment tool
