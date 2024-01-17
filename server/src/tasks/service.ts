import { Task, TaskModel } from './model';

export const getTasks = async () => {
  try {
    const tasks = await TaskModel.find();

    return tasks;
  } catch (err) {
    console.error(err);
  }
};

export const postTask = async (data: Task) => {
  try {
    const task = new TaskModel(data);

    return task;
  } catch (err) {
    console.error(err);
  }
};
