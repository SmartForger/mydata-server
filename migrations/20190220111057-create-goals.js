"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Goals", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      goal: {
        type: Sequelize.TEXT,
        field: "goal"
      },
      due_date: {
        type: Sequelize.STRING,
        field: "due_date"
      },
      complete: {
        type: Sequelize.BOOLEAN,
        field: "complete"
      },
      created_at: {
        type: Sequelize.DATE,
        field: "created_at",
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        field: "updated_at",
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Goals");
  }
};
