'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Post, { as: "Posts", foreignKey: "category_id" });
  };
  return Category;
};