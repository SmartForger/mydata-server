FROM node:10.14
WORKDIR /code
RUN npm install -g yarn sequelize-cli
ADD package.json /code
RUN yarn install