const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },

    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    
  }, {
      tableName: 'postcategories',
      timesTamps: false,
      underscored: true,
    });

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        foreignKey: 'postId',
        as: 'Category',
      });

      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: 'categoryId',
        as: 'BlogPost',
      })};
    return PostCategory;
};

module.exports = PostCategory;