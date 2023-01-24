import express, { Request, Response } from 'express'
import { VerifyToken } from '../middlewares/verify-token';

import { makeStartSessionController } from '../factories/start-session-controller';
import { makeSendTextController } from '../factories/send-text-controller';

const router = express.Router()

router.post('/start/:session', VerifyToken, async (req: Request, res: Response) => {
  const { session } = req.params
  const { webhooks } = req.body

  const controller = makeStartSessionController()
  controller.handle(session, webhooks, res)
})

router.post('/send-text/:session', VerifyToken, async (req: Request, res: Response) => {
  const { session } = req.params
  const { to, message } = req.body

  try {
    const controller = makeSendTextController()
    const messageSent = await controller.handle(session, to, message)

    res.status(200).json(messageSent)
  } catch(err) {
    res.status(500).json({err})
  }
  
})

export default router;