"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Emails", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      subject: {
        type: Sequelize.STRING,
        field: "subject"
      },
      fromEmail: {
        type: Sequelize.STRING,
        field: "fromEmail"
      },
      toEmail: {
        type: Sequelize.STRING,
        field: "toEmail"
      },
      body: {
        type: Sequelize.TEXT,
        field: "body"
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
      stage_id: {
        type: Sequelize.INTEGER,
        field: "stage_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Stages",
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
    return queryInterface.dropTable("Emails", {
      cascade: true
    });
  }
};
