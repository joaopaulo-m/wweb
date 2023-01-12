import { CreateUserUseCase } from "../../../domain/usecases/user/create";
import { Request, Response } from 'express'

export class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ){}

  async handle(req: Request, res: Response) {
    const { name, email, password, webhooks } = req.body;

    try {
      const user = await this.createUserUseCase.execute({
        name, email, password, webhooks
      });

      return res.status(200).json(user);
    } catch(err) {
      return res.status(400).json({ msg: err })
    }
  }
}