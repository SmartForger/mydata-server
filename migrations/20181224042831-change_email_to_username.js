'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'email', 'username');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'username', 'email');
  }
};
