const jwt = require('jsonwebtoken');
const PostService = require('../services/post.services');

const newPost = async (req, res) => {
  const { authorization } = req.headers;
  const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'blogsAPI';
  const { id } = jwt.verify(authorization, TOKEN_SECRET_KEY);

  try {
  const { title, content, categoryIds } = req.body;
    const result = await PostService.newPost({ userId: id, title, content, categoryIds });
    if (result.error) {
      return res.status(400).json({ message: result.error });
    }
    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Estou aqui' });
    }
  };

module.exports = {
  newPost,
};