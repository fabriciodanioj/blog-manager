import { Router } from 'express';

import PostController from './app/controllers/PostController';
import CategoryController from './app/controllers/CategoryController';

import verifyIfPostExists from './app/middlewares/verifyIfPostExists';

const routes = new Router();

routes.post('/post', PostController.store);
routes.get('/post', PostController.index);
routes.delete('/post/:id', verifyIfPostExists, PostController.destroy);
routes.get('/post/:id', verifyIfPostExists, PostController.show);
routes.put('/post/:id', verifyIfPostExists, PostController.update);

routes.post('/category', CategoryController.store);
routes.get('/category', CategoryController.index);
routes.delete('/category/:id', verifyIfPostExists, CategoryController.destroy);
routes.put('/category/:id', verifyIfPostExists, CategoryController.update);

export default routes;
