const userService = require('../services/user.services');

const user = async (req, res) => {
  const { displayName, email, password } = req.body;
    const result = await userService.user({ displayName, email, password });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    res.status(201).json(result);
  };

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Erro no getAll' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getById(id);
    if (!result) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Erro no id' });
  }
};

module.exports = {
  user,
  getAll,
  getById,
};