import Post from '../models/Post';

export default async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).send({ error: 'This Post does not exists' });
  }

  return next();
};
