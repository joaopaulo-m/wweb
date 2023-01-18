import express, { Request, Response } from 'express'
import { makeStartSessionController } from '../factories/start-session-controller';
import { VerifyToken } from '../middlewares/verify-token';

const router = express.Router()

router.post('/start/:session', VerifyToken, async (req: Request, res: Response) => {
  const { session } = req.params

  const controller = makeStartSessionController()
  const httpResponse = await controller.handle(session)

  res.status(httpResponse.statusCode).json(httpResponse.data)
})

export default router;