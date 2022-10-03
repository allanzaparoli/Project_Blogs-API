// requisito 12

const validationPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title) {
     return res.status(400)
     .json({ message: 'Some required fields are missing' });
  }

  if (!content) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' });
 }

 if (!categoryIds) {
  return res.status(400)
  .json({ message: 'Some required fields are missing' });
}

  next();
};

module.exports = { validationPost };