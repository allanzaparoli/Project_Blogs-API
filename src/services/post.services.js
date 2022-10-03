const postcategory = require('../models');
const generateToken = require('../utils/JWT');

const newPost = async ({ title, content, categoryIds, id }) => {
const result = await postcategory.create({ title, content, categoryIds, id });

const token = generateToken(result.dataValues);
return { token };
};

module.exports = newPost;