import { Router } from 'express';

import PostController from './app/controllers/PostController';
import verifyIfPostExists from './app/middlewares/verifyIfPostExists';

const routes = new Router();

routes.post('/post', PostController.store);
routes.get('/post', PostController.index);
routes.delete('/post/:id', verifyIfPostExists, PostController.destroy);
routes.get('/post/:id', verifyIfPostExists, PostController.show);
routes.put('/post/:id', verifyIfPostExists, PostController.update);

export default routes;
