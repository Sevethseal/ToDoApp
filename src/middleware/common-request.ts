import { validationResult } from "express-validator";
import { setResponse } from "../utils/responseHandler";
import { Response, Request, NextFunction } from "express";

export const commonValidator = () => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const errs = validationResult(req).formatWith((error) => {
      return {
        issue: error.msg,
        field: error.param,
        value: error.value,
      };
    });
    if (errs.isEmpty()) {
      return next();
    }
    setResponse(400, _res, {}, errs);
  };
};
