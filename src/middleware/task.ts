import { checkSchema } from "express-validator";
export default {
  validateCreateTaskRequest: () => {
    return checkSchema({
      userId: {
        in: ["body"],
        exists: {
          errorMessage: "userId required",
        },
      },
      taskId: {
        in: ["body"],
        exists: {
          errorMessage: "taskId required",
        },
      },
      title: {
        in: ["body"],
        exists: {
          errorMessage: "title required",
        },
      },
      description: {
        in: ["body"],
        exists: {
          errorMessage: "description required",
        },
      },
      dueDate: {
        in: ["body"],
        exists: {
          errorMessage: "dueDate required",
        },
      },
      priority: {
        in: ["body"],
        exists: {
          errorMessage: "priority required",
        },
      },
      status: {
        in: ["body"],
        exists: {
          errorMessage: "status required",
        },
      },
    });
  },
};
