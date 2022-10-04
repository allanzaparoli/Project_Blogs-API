const models = require('../models');

const { BlogPost, Category, PostCategory } = models;

const categoryIdsVerification = async (ids) => {
  const categoriesIds = await Category.findAll({
    attributes: ['id'],
  });
  const categoriesIdsArray = categoriesIds.map(({ dataValues: { id } }) => id);
  const isNotValid = ids.some((id) => !categoriesIdsArray.includes(id));
  return isNotValid;
};

const newPost = async (postDetails) => {
  const { title, content, categoryIds, userId } = postDetails;
  const isNotValidCategory = await categoryIdsVerification(categoryIds);
  if (isNotValidCategory) return { error: '"categoryIds" not found' };
  const result = await BlogPost.create({ title, content, userId });
  const { id } = result.dataValues;
  await PostCategory
    .bulkCreate(categoryIds
      .map((categoryId) => ({ postId: id, categoryId })));
  return { id, title, content, userId };
};

module.exports = { newPost };
