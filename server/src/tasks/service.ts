import { TaskModel } from './model';

export const getTasks = async () => {
  try {
    const tasks = await TaskModel.find();

    return { code: 200, data: tasks };
  } catch (err) {
    console.error(err);
  }
};

export const postTask = async (data: any) => {
  try {
    const task = new TaskModel(data);

    return { code: 200, data: task };
  } catch (err) {
    console.error(err);
  }
};
