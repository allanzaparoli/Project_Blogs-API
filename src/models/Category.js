const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    }, {
    timestamps: false,
    underscored: true,
    tableName: 'categories',
    },
);
  return category;
};

module.exports = Category;