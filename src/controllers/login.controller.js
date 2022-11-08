const loginService = require('../services/login.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginService.login({ email, password });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  login,
};