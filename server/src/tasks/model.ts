import mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

export const TaskModel = mongoose.model('Task', taskSchema);
