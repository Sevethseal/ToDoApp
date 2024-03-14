import {
  createTask,
  deleteTask,
  getAllTaskList,
  updateTask,
} from "../db/dao/task";
import { TaskDetail, CreateTaskRequestBody } from "../types/task";

export default {
  getTasksList: async (userId: string) => {
    const taskList = await getAllTaskList(userId);
    console.log(taskList);
    return taskList;
  },
  createTask: async (taskDetail: CreateTaskRequestBody) => {
    const taskId = await createTask(taskDetail);
    console.log(taskId);
    return taskId;
  },
  updateTask: async (taskDetail: TaskDetail) => {
    const updatedTaskDetail = await updateTask(taskDetail);
    console.log(updatedTaskDetail);
  },
  deleteTask: async (taskId: string) => {
    const deletedId = await deleteTask(taskId);
    console.log(deletedId);
  },
};
