"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Images", {
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
      employee_id: {
        type: Sequelize.INTEGER,
        field: "employee_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Employees",
          key: "id"
        },
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Images");
  }
};
