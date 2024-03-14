import { Router } from "express";
import taskController from "../controllers/task_controllers";
import { commonValidator } from "../middleware/common-request";
import taskRequestValidations from "../middleware/task";
import { catchErrors } from "../handlers/error_handler";

const taskRoutes = {
  getTasks: "/tasks",
  createTask: "/task",
  updateTask: "/task/:taskId",
  deleteTask: "/task/:taskId",
};

const taskRouter = Router();

taskRouter.get(taskRoutes.getTasks, taskController.getTasks);

taskRouter.post(
  taskRoutes.createTask,
  taskRequestValidations.validateCreateTaskRequest(),
  commonValidator(),
  catchErrors(taskController.createTask)
);

taskRouter.put(
  taskRoutes.updateTask,
  taskRequestValidations.validateCreateTaskRequest(),
  commonValidator(),
  catchErrors(taskController.updateTask)
);

taskRouter.delete(
  taskRoutes.deleteTask,
  catchErrors(taskController.deleteTask)
);

export default taskRouter;
