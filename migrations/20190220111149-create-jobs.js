"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Jobs", {
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
      location: {
        type: Sequelize.STRING,
        field: "location"
      },
      location_nickname: {
        type: Sequelize.STRING,
        field: "location_nickname"
      },
      security_clearance: {
        type: Sequelize.STRING,
        field: "security_clearance"
      },
      required_skills: {
        type: Sequelize.TEXT,
        field: "required_skills"
      },
      desired_skills: {
        type: Sequelize.TEXT,
        field: "desired_skills"
      },
      description: {
        type: Sequelize.TEXT,
        field: "description"
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
      contract_id: {
        type: Sequelize.INTEGER,
        field: "contract_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Contracts",
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
    return queryInterface.dropTable("Jobs");
  }
};
