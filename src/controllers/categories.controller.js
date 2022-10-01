const categoriesService = require('../services/categories.services');

const categories = async (req, res, next) => {
  try {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const result = await categoriesService.categories({ name });
    res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Erro no categories' });
    next();
  }
  };

  module.exports = {
    categories,
  };