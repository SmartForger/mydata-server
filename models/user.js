'use strict';

const bcrypt = require('bcrypt');

const saltRounds = parseInt(process.env.SALT_FACTOR) || 10;

function encryptPasswordIfChanged(user, options) {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, saltRounds)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        console.log(err);
        throw new Error();
      });
  }

  return Promise.resolve();
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: encryptPasswordIfChanged,
      beforeUpdate: encryptPasswordIfChanged
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Post, { as: "Posts", foreignKey: "user_id" });
  };

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  }

  return User;
};
