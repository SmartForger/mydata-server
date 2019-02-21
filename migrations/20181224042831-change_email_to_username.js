'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users1', 'email', 'username');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users1', 'username', 'email');
  }
};
