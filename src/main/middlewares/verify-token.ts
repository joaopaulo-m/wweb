import { NextFunction, Request, Response } from "express";
import { makeVerifyTokenMiddleware } from "../factories/verify-token-middleware";
import 'dotenv/config'

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  const middleware = makeVerifyTokenMiddleware()
  const authorization = req.headers.authorization; 

  if (authorization) {
    const token = authorization.split(' ')[1];
    const { secretKey } = req.body;
  
    middleware.handle({ token,  secretKey });
    return next();
  }

  return res.status(401).json({ err: 'Unauthorized' })
}