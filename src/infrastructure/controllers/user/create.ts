import { Request, Response } from 'express'
import { CreateUserService } from "../../../application/services/user/create";

export class CreateUserController {
  constructor(
    private readonly createUserService: CreateUserService
  ){}

  async handle(req: Request, res: Response) {
    const { name, email, password, webhooks } = req.body;
    const user = await this.createUserService.execute({
      name, email, password, webhooks
    });

    return res.status(200).json(user);
  }
}