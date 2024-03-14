import { Response, Request } from "express";
import task from "../services/task";
import { CreateTaskRequest } from "../types/task";
import { setResponse } from "../utils/responseHandler";
export default {
  getTasks: async (req: Request, res: Response) => {
    const { userId } = req.body;
    const taskList = await task.getTasksList(userId);
    setResponse(200, res, taskList);
  },
  createTask: async (req: CreateTaskRequest, res: Response) => {
    const { body } = req;
    console.log(req);
    const taskId = await task.createTask(body);
    res.send(taskId);
  },
  updateTask: async (req: CreateTaskRequest, res: Response) => {
    const { path, body } = req;
    const taskId = path.split("/").pop();
    const updateTask = {
      taskId,
      ...body,
    };
    await task.updateTask(updateTask);
    setResponse(200, res, {});
  },
  deleteTask: async (req: Request, res: Response) => {
    const { path } = req;
    const taskId = path.split("/").pop() as string;
    await task.deleteTask(taskId);
    setResponse(202, res, {});
  },
};
