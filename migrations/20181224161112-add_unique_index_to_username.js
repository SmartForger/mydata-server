'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users1', ['username'], {
      type: 'unique',
      name: 'users_unique_contraint_username'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Users1',
      'users_unique_contraint_username'
    );
  }
};
