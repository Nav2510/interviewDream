# InterviewDream

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26 on front-end and with [Express Framework](https://expressjs.com/) and [Apollo graphql](https://www.apollographql.com/docs/apollo-server/) on backend.

## Prototype screens

For design review prototype screens, navigate to

1. [InterviewDream - LoFi](https://xd.adobe.com/view/a6675294-38d4-4caf-5576-295ab6a706b8-d056/)
2. [InterviewDream - HiFi](https://xd.adobe.com/view/9da6497f-fc2c-4135-6344-c04a3b94c1ea-eb97/)

## Deployed Site Link

1. https://interviewdreamv2.firebaseapp.com/
2. https://interviewdreamv2.web.app/

## InterviewDream - backend

InterviewDream backend is build on node.js with express framework and Apollo Graphql server. Please refer to [InterviewDream - backend](https://github.com/Nav2510/interviewDream-backend) for the InterviewDream backend github repository.

## InterviewDream graphql server

For deployed backend server and all the graphql apis [InterviewDream - deployed server](https://interviewdream-backend.herokuapp.com/). Please refers to [Apollo graphql queries](https://www.apollographql.com/docs/react/data/queries/) for graphql queries.

## CI/CD Pipeline

CI/CD Pipeline checks:

1. Pipeline is setup using [Github actions](https://github.com/features/actions) for `lint`, `test`, and `build`.
2. Deployment pipeline is setup using [Firebase github actions](https://github.com/marketplace/actions/deploy-to-firebase-hosting). Deployed links are available in the comments of the PR.
3. Code smells and bugs are checked using Sonar Cloud.<br />
   [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Nav2510_interviewDream&metric=alert_status)](https://sonarcloud.io/dashboard?id=Nav2510_interviewDream)
   [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Nav2510_interviewDream&metric=code_smells)](https://sonarcloud.io/dashboard?id=Nav2510_interviewDream) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Nav2510_interviewDream&metric=bugs)](https://sonarcloud.io/dashboard?id=Nav2510_interviewDream)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/dashboard?id=Nav2510_interviewDream)

## Production Server

InterviewDream automatically deploys to the [Google firebase](https://firebase.google.com/) once any `Pull Request` is created for `staging` or `master` branch. Please check for the comments from "Github Actions" for the deployed link.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

For any help and queries you can contact the author with [Linkedin](https://www.linkedin.com/in/navdeep-singh-4631a9127/)
