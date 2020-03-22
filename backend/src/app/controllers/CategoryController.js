import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    try {
      const category = await Category.create(req.body);

      return res.status(201).send(category);
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async index(req, res) {
    try {
      const categories = await Category.find({});
      return res.status(200).send(categories);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await Category.findByIdAndUpdate({ id }, req.body);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await Category.findByIdAndDelete(id);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new CategoryController();
