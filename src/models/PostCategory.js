const PostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    post_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },

    category_id: {
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
        foreignKey: 'post_id',
        as: 'Category',
      });

      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: 'category_id',
        as: 'BlogPost',
      })};
    return postCategory;
};

module.exports = PostCategory;