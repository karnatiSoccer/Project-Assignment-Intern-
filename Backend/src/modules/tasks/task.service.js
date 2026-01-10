import Task from "./task.model.js";

export const createTask = async (data, userId) => {
  return await Task.create({
    ...data,
    user: userId,
  });
};

export const getTasks = async (user) => {
  if (user.role === "ADMIN") {
    return await Task.find().populate("user", "name email");
  }
  return await Task.find({ user: user.id });
};

export const getTaskById = async (taskId, user) => {
  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");

  if (user.role !== "ADMIN" && task.user.toString() !== user.id) {
    throw new Error("Access denied");
  }

  return task;
};

export const updateTask = async (taskId, data, user) => {
  const task = await getTaskById(taskId, user);
  Object.assign(task, data);
  return await task.save();
};

export const deleteTask = async (taskId, user) => {
  const task = await getTaskById(taskId, user);
  return await task.deleteOne();
};
