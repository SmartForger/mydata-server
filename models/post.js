'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    slug: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Category, { as: 'Category', foreign_key: 'category_id' });
  };
  return Post;
};