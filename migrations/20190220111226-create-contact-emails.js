"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contract_emails", {
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
      email_id: {
        type: Sequelize.INTEGER,
        field: "email_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Emails",
          key: "id"
        },
        primaryKey: true
      },
      contract_id: {
        type: Sequelize.INTEGER,
        field: "contract_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Contracts",
          key: "id"
        },
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contract_emails");
  }
};
