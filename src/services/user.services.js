const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const user = async ({ email, password, displayName }) => {
const result = await User.create({ email, password, displayName });

const token = generateToken(result.dataValues);
return { token };
};

module.exports = {
user,
};