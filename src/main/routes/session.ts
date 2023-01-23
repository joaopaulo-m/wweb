import express, { Request, Response } from 'express'
import { makeStartSessionController } from '../factories/start-session-controller';
import { VerifyToken } from '../middlewares/verify-token';

const router = express.Router()

router.post('/start/:session', VerifyToken, async (req: Request, res: Response) => {
  const { session } = req.params
  const { webhooks } = req.body

  const controller = makeStartSessionController()
  controller.handle(session, webhooks, res)
})

export default router;