import { Response } from "express";

export const errorResponse = (res: Response, message: string, status = 400) => {
  res.status(status).json({ message });
};
