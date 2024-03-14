import { TaskDetail, CreateTaskRequestBody } from "../../types/task";
import {
  createTaskQuery,
  getTaskListQuery,
  updateTaskQuery,
  deleteTaskQuery,
} from "../constant";
import queryHandler from "../queries";

export const getAllTaskList = async (userId: string) => {
  return (await queryHandler(getTaskListQuery, [userId])).rows;
};

export const createTask = async (taskDetail: CreateTaskRequestBody) => {
  const {
    userId,
    title,
    description,
    dueDate,
    priority,
    status,
    categoryName,
    color,
  } = taskDetail;
  return (
    await queryHandler(createTaskQuery, [
      userId,
      title,
      description,
      dueDate,
      priority,
      status,
      categoryName,
      color,
    ])
  ).rows;
};
export const updateTask = async (taskDetail: TaskDetail) => {
  const {
    taskId,
    userId,
    title,
    description,
    dueDate,
    priority,
    status,
    categoryName,
    color,
  } = taskDetail;
  return (
    await queryHandler(updateTaskQuery, [
      taskId,
      userId,
      title,
      description,
      dueDate,
      priority,
      status,
      categoryName,
      color,
    ])
  ).rows;
};

export const deleteTask = async (taskId: string) => {
  return (await queryHandler(deleteTaskQuery, [taskId])).rows;
};
