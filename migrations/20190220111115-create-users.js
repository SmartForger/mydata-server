"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      cog_id: {
        type: Sequelize.STRING,
        field: "cog_id"
      },
      pool_id: {
        type: Sequelize.STRING,
        field: "pool_id"
      },
      email: {
        type: Sequelize.STRING,
        field: "email"
      },
      img: {
        type: Sequelize.STRING,
        field: "img",
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        field: "name"
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
      },
      role_id: {
        type: Sequelize.INTEGER,
        field: "role_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Roles",
          key: "id"
        },
        allowNull: true
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
    return queryInterface.dropTable("Users");
  }
};
