import { Request } from "express";

export interface TaskDetail {
  taskId?: string;
  userId: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  categoryName: string;
  color: string;
}
export type CreateTaskRequestBody = Omit<TaskDetail, "taskId">;

export interface CreateTaskRequest extends Request {
  body: CreateTaskRequestBody;
}
