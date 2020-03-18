import * as Yup from 'yup';
import Post from '../models/Post';

class PostController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        author: Yup.string().required(),
        img: Yup.string(),
        content: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const post = await Post.create(req.body);

      return res.status(201).send(post);
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async index(req, res) {
    try {
      const posts = await Post.find({});
      return res.status(200).send(posts);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const post = await Post.findById(id);

      return res.status(200).send(post);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string(),
        author: Yup.string(),
        img: Yup.string(),
        content: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const { id } = req.params;

      await Post.findByIdAndUpdate({ id }, req.body);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await Post.findByIdAndDelete(id);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new PostController();
