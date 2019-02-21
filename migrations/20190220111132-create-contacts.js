"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contracts", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        field: "title"
      },
      prime: {
        type: Sequelize.STRING,
        field: "prime"
      },
      program_manager: {
        type: Sequelize.STRING,
        field: "program_manager"
      },
      program_manager_phone: {
        type: Sequelize.STRING,
        field: "program_manager_phone"
      },
      program_manager_email: {
        type: Sequelize.STRING,
        field: "program_manager_email"
      },
      contract_number: {
        type: Sequelize.STRING,
        field: "contract_number"
      },
      sub_contract_number: {
        type: Sequelize.STRING,
        field: "sub_contract_number"
      },
      contract_administrator: {
        type: Sequelize.STRING,
        field: "contract_administrator"
      },
      contract_administrator_phone: {
        type: Sequelize.STRING,
        field: "contract_administrator_phone"
      },
      contract_administrator_email: {
        type: Sequelize.STRING,
        field: "contract_administrator_email"
      },
      security_officer: {
        type: Sequelize.STRING,
        field: "security_officer"
      },
      security_officer_phone: {
        type: Sequelize.STRING,
        field: "security_officer_phone"
      },
      security_officer_email: {
        type: Sequelize.STRING,
        field: "security_officer_email"
      },
      comments: {
        type: Sequelize.TEXT,
        field: "comments"
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
    return queryInterface.dropTable("Contracts", {
      cascade: true
    });
  }
};
