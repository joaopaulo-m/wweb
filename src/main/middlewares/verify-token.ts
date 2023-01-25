import { NextFunction, Request, Response } from "express";
import { makeVerifyTokenMiddleware } from "../factories/verify-token-middleware";
import 'dotenv/config'

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  const middleware = makeVerifyTokenMiddleware()
  const authorization = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET

  if (authorization) {
    const token = authorization.split(' ')[1];
    const decoded = middleware.handle({ token, secretKey })

    if (decoded.name === 'JsonWebTokenError') throw new Error('Invalid Token')

    next()
  } else { 
   throw new Error('Invalid Token')
  }
}