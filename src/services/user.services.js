const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const user = async ({ displayName, email, password }) => {
const result = await User.create({ displayName, email, password });

const token = generateToken(result.dataValues);
return { token };
};

module.exports = {
user,
};