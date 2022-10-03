// requisito 12

const validationPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title.length < 1) {
     return res.status(400)
     .json({ message: 'Some required fields are missing' });
  }
  if (content.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (categoryIds.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = { validationPost };