"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AuditCreates", {
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
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      action: {
        type: Sequelize.STRING,
        field: "action"
      },
      details: {
        type: Sequelize.STRING,
        field: "details"
      },
      user_id: {
        type: Sequelize.INTEGER,
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Users",
          key: "id"
        },
        allowNull: true
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
    return queryInterface.dropTable("AuditCreates");
  }
};
