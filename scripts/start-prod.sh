#!/bin/bash
while ! nc -z db 5432; do sleep 3; done
cd /code
sequelize db:migrate
sequelize db:seed
node dist/index.js
