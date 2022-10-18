## Getting Started
The project is an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.
This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. 

## libraries and technology
- Node.js
- TypeScript
- Eslint
- Prettier
- unit testing
- express server
- Jasmine
- sharp


## Prerequisites Technologies

Your must install the following in order to use the project:
- [Node & NPM](https://nodejs.org/en/download/)
- [Typescript](https://www.npmjs.com/package/typescript) (install it globally)

## Setup Steps

in your terminal run:
1. `npm install`
2. `cp .env.example .env`
2. `npm start`
and then head to your browser at `localhost:3000` and it should be working.

#### Notes
1. To run your tests you can simply run `npm test`.
2. Choose an image from assets file
