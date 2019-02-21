"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Attachments", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      key: {
        type: Sequelize.STRING,
        field: "key"
      },
      filename: {
        type: Sequelize.STRING,
        field: "filename"
      },
      file_type: {
        type: Sequelize.STRING,
        field: "file_type"
      },
      size: {
        type: Sequelize.INTEGER,
        field: "size"
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
      email_id: {
        type: Sequelize.INTEGER,
        field: "email_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Emails",
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
    return queryInterface.dropTable("Attachments");
  }
};
