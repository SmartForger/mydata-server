"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Stages", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        field: "name"
      },
      order: {
        type: Sequelize.INTEGER,
        field: "order"
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
      },
      company_id: {
        type: Sequelize.INTEGER,
        field: "company_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Companies",
          key: "id"
        },
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Stages", {
      cascade: true
    });
  }
};
