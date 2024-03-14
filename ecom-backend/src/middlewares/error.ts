import { NextFunction, Request, Response } from "express";
//creating a error middleware

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

  
    return res.status(400).json({
      success: false,
      message: "some error",
    });
  };