const { Category } = require('../models');

const categories = async ({ name }) => {
const result = await Category.create({ name });
return result;
};

module.exports = {
  categories,
};