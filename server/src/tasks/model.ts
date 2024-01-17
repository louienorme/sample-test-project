import mongoose from 'mongoose';

export type Task = {
  title: String;
  desc: String;
};

export const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

export const TaskModel = mongoose.model<Document | Task>('Task', taskSchema);
