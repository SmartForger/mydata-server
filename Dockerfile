FROM node:10.14
WORKDIR /code
RUN npm install -g sequelize-cli
ARG NPM_TOKEN
