const PostService = require('../services/post.services');

const newPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;
    const result = await PostService.newPost({ title, content, categoryIds, id });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    res.status(201).json(result);
  };

module.exports = newPost;