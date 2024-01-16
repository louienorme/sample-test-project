import { RequestHandler } from 'express';
import { getTasks, postTask } from './service';

export const getTasksController: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await getTasks();

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const postTaskController: RequestHandler = async (req, res, next) => {
  try {
    const task = await postTask(req.body);

    res.json(task);
  } catch (err) {
    next(err);
  }
};
