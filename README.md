# GraphQL server

## Tech stack

- Node.js 10.x
- ES 6
- Babel
- Express.js
- Apollo server
- Postgres
- Sequelize
- Docker

## Commands

### Open bash
```
$ docker-compose exec graphql bash
```

### Init Sequelize
```
$ docker-compose exec graphql sequelize init
```

### Add global dependencies
```
$ docker-compose exec graphql npm install -g sequelize-cli
```

### Add local dependencies
```
$ docker-compose exec graphql yarn add pg sequelize
```