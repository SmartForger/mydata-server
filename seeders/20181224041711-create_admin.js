"use strict";

const models = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (!process.env.ADMIN_EMAIL) {
      return Promise.reject(
        "Please set admin email in environment variable. export ADMIN_EMAIL=abc@example.com"
      );
    }

    return models.User.create({
      name: "Admin User",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
      status: 1
    }).then(() => {
      console.log("Admin created");
    });
  },

  down: (queryInterface, Sequelize) => {
    if (!process.env.ADMIN_USER) {
      return;
    }

    return models.User.destroy({
      where: { email: process.env.ADMIN_EMAIL }
    });
  }
};
