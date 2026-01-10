import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "./task.service.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "./task.schema.js";

export const create = async (req, res, next) => {
  try {
    const data = createTaskSchema.parse(req.body);
    const task = await createTask(data, req.user.id);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const tasks = await getTasks(req.user);
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.id, req.user);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = updateTaskSchema.parse(req.body);
    const task = await updateTask(req.params.id, data, req.user);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await deleteTask(req.params.id, req.user);
    res.status(200).json({
      success: true,
      message: "Task deleted",
    });
  } catch (error) {
    next(error);
  }
};
