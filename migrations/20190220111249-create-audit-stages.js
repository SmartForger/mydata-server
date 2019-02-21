"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AuditStages", {
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
      },
      from_stage_id: {
        type: Sequelize.INTEGER,
        field: "from_stage_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Stages",
          key: "id"
        },
        allowNull: true
      },
      to_stage_id: {
        type: Sequelize.INTEGER,
        field: "to_stage_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Stages",
          key: "id"
        },
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("AuditStages");
  }
};
