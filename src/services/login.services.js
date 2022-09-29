const { user } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
	const result = await user.findOne({
		attributes: ['email', 'password'],
		where: { email, password }
	});

	const emailExist = await user.findOne({ where: { email } });
  if (!emailExist) {
    return { error: 400, message: 'Invalid fields' };
  }

	const token = generateToken(result.dataValues);
	return { token }
};

module.exports = {
	login
};