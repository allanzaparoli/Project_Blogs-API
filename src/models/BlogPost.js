const { createConnection } = require("mysql2");

const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    title: {
      type: DataTypes.STRING
    },

    content: {
      type: DataTypes.STRING
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.PostCategory, { foreignKey: 'post_id', as: 'postCategories' });
  }

  return blogPost;
};

module.exports = BlogPost;