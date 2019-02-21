"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Employees", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true
      },
      name_first: {
        type: Sequelize.STRING,
        field: "name_first"
      },
      name_middle: {
        type: Sequelize.STRING,
        field: "name_middle"
      },
      name_last: {
        type: Sequelize.STRING,
        field: "name_last"
      },
      resume: {
        type: Sequelize.STRING,
        field: "resume"
      },
      mobile_phone: {
        type: Sequelize.STRING,
        field: "mobile_phone"
      },
      work_phone: {
        type: Sequelize.STRING,
        field: "work_phone"
      },
      work_email: {
        type: Sequelize.STRING,
        field: "work_email"
      },
      personal_email: {
        type: Sequelize.STRING,
        field: "personal_email"
      },
      street: {
        type: Sequelize.STRING,
        field: "street"
      },
      city: {
        type: Sequelize.STRING,
        field: "city"
      },
      state: {
        type: Sequelize.STRING,
        field: "state"
      },
      zip: {
        type: Sequelize.STRING,
        field: "zip"
      },
      resource_manager: {
        type: Sequelize.STRING,
        field: "resource_manager"
      },
      program_manager: {
        type: Sequelize.STRING,
        field: "program_manager"
      },
      salary: {
        type: Sequelize.STRING,
        field: "salary"
      },
      manager: {
        type: Sequelize.STRING,
        field: "manager"
      },
      start_date: {
        type: Sequelize.DATE,
        field: "start_date"
      },
      emergency_contact: {
        type: Sequelize.STRING,
        field: "emergency_contact"
      },
      emergency_contact_phone: {
        type: Sequelize.STRING,
        field: "emergency_contact_phone"
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
      },
      job_id: {
        type: Sequelize.INTEGER,
        field: "job_id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Jobs",
          key: "id"
        },
        allowNull: true
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
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Employees", {
      cascade: true
    });
  }
};
