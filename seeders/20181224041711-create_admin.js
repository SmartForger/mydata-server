'use strict';

const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!process.env.ADMIN_USER) {
      return;
    }

    return models.User.create(
      {
        firstname: 'Admin',
        lastname: 'User',
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin',
        status: 1
      }
    ).then(() => {
      console.log('Admin created');
    });
  },

  down: (queryInterface, Sequelize) => {
    if (!process.env.ADMIN_USER) {
      return;
    }

    return models.User.destroy({
      where: { username: process.env.ADMIN_USER }
    });
  }
};
