# React, GraphQL, and Lunar Sample App

Check out the materials from React Boston 2018:
* [Video Recording](https://www.youtube.com/watch?v=K445DtQ5oHY)
* Slide Deck: [Determistic Mocking with GraphQL & Apollo: Lunar Launch](https://github.com/mjfaga/react-boston-2018-lunar-launch/tree/master/presentation)

## Setup

### Dependencies

This project uses [yarn](https://yarnpkg.com/en/docs/install#mac-stable) to manage dependencies.

```sh
yarn install
```

### Starting the App

First, you will want to start the mock server:

```sh
yarn run start:apollolunar
```

Then you can start the app with:

```sh
yarn start
```

## Testing the App

### Run unit tests:
```sh
yarn test
```

### Run Cypress Tests:

First, you need to get the app started up per the instructions above. Once both
the mocks and web server are running, you can either:

Start the client:
```sh
yarn run cypress:open
```

or run in the console
```sh
yarn run cypress:run
```
