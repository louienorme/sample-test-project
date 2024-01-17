import { Router } from 'express';
import { getTasksController, postTaskController } from './controller';

export const mainRouter = Router();

mainRouter.route('/').get(getTasksController);

mainRouter.route('/task').post(postTaskController);

export default mainRouter;
