
## Description

A very basic api built with Nest JS as part of an interview test. 

task:

There is an attached JSON file that has a list of universities. Imagine that this is a regular database. Please, implement an API using Nest JS (feel free to use Nest CLI - https://docs.nestjs.com) and GraphQL so it can expose the following queries:

- GET a list of universities
- GET university by id

Also, there should be the following mutations:

- CREATE university (only for authorized users)
- UPDATE university (only for authorized users)

Please note that each of the universities has a `city` and `city` has a `state.` So there might be some complexity.

Create a local server that will be available as a GraphQL Playground, or it will have the ability to communicate with Postman / Insomnia. No Frontend work is required during this task.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
- Nest JS Docs

## Challenges
