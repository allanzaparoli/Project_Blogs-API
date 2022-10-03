const { postcategory } = require('../models');
const generateToken = require('../utils/JWT');

const PostCategory = async ({ email, password, displayName }) => {
const result = await postcategory.create({ email, password, displayName });

const token = generateToken(result.dataValues);
return { token };
};

module.exports = PostCategory;