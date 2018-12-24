'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['username'], {
      type: 'unique',
      name: 'users_unique_contraint_username'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Users',
      'users_unique_contraint_username'
    );
  }
};
