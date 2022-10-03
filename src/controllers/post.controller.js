const PostService = require('../services/post.services');

const postservice = async (req, res) => {
  const { title, content, categoryIds } = req.body;
    const result = await PostService.user({ title, content, categoryIds });
    if (result.error) {
      return res.status(result.error).json({ message: result.message });
    }
    res.status(201).json(result);
  };

module.exports = postservice;