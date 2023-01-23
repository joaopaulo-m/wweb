import express, { Request, Response } from 'express';
import { makeAuthenticateUserController } from '../factories/authenticate-user-controller';
import { makeCreateUserController } from '../factories/create-user-controller';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, email, password, session, webhooks } = req.body; 
  const controller = makeCreateUserController();
  const httpResponse = await controller.handle({ name, email, password, session, webhooks });
  res.status(httpResponse.statusCode).json(httpResponse.data);
})

router.post('/auth', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const controller = makeAuthenticateUserController();
  const httpResponse = await controller.handle({ email, password });
  res.status(httpResponse.statusCode).json(httpResponse.data);
})

export default router;