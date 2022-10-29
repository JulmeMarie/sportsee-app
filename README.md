# Project 9 - Front-end Dashboard

This repo contains all the source code to run the front-end sports analytics dashboard SportSee.

## 1. General information

To start this project, you must run the command npm run start. In this documentation, we will see several methods to launch the project easily.

## 2. Project (**without Docker**)

### 2.1 Prerequisites

- [NodeJS (**version 16.13.0**)](https://nodejs.org/en/)
- [React (**version 18.2.0**)](https://en.react.org)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` or `npm` command will allow you to install the dependencies.

## 3. Endpoints

### 3.1 Possible endpoints

This project includes one endpoint for that enable users to display the dashboard: 

- `http://localhost:3001/dashboard/:userId` - display the dashboard for a user. This first endpoint includes the user activity chart, the user Performance Chart, the user objectives chart, the user todayScore chart, the user key data card, user greeting words with firstname, etc...


**Warning, currently while launching the app, we have to chose which user we want to display dashboard for betwen the two users mocked. They have userId 12 and 18 respectively.**

### 3.2 Examples of queries

- `http://localhost:3001/dashboard/12` - Display the dashboard for the user with id 12
- `http://localhost:3001/dashboard/18` - Display the dashboard for the user with id 18