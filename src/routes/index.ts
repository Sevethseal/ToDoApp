import { Router } from "express";
import taskRouter from "./task";

const router: Router = Router();

router.use(taskRouter);
export default router;
