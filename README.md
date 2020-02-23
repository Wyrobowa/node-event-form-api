# Node Event Form API
REST API based on Node.js and MongoDB

---

## Table od Contents

1. [Installation](#installation)
2. [Available Scripts](#available-scripts)
    1. [Starting project](#starting-project)
    2. [Linting](#linting)
    3. [Testing](#testing)

## Installation

Use [npm](https://nodejs.com) for managing dependencies.

`npm install` - install project on local machine.

`cp .env.local .env` - you need .env file with all needed credentials, remember to fill it with proper values!#

## Available Scripts

In the project directory, you can run:

### Starting project

#### `npm start`

Application is hosted on [localhost:3001](http://localhost:3001).

Available routes:
- [GET localhost:3001/list](http://localhost:3001/list)
- [POST localhost:3001/add](http://localhost:3001/add)

The page will reload if you make edits. You will also see any code errors in the console.


### Linting

#### `npm run lint`

Launches code linting.

### Testing

#### `npm test`

Launches unit tests using [Mocha](https://mochajs.org/).
