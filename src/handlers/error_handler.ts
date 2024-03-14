import { Response, Request, NextFunction } from "express";
import { setResponse } from "../utils/responseHandler";
export function catchErrors(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch((error) => {
      setResponse(400, res, {}, error);
    });
  };
}
