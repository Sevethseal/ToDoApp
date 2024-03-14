import { Response } from "express";

interface ResponseObject {
  result: unknown;
  errors?: unknown;
}
export const setResponse = (
  statusCode: number,
  response: Response,
  result: unknown,
  error?: unknown
) => {
  let responseJson: ResponseObject = {
    result,
  };
  if (error) {
    responseJson = {
      ...responseJson,
      ...error,
    };
  }
  response.status(statusCode).json(responseJson);
};
