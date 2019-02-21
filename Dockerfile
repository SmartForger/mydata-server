FROM node:8.10
WORKDIR /code
RUN npm install -g sequelize-cli
ARG NPM_TOKEN
