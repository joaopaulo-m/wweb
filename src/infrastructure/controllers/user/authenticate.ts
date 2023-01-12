import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../../../domain/usecases/user/authenticate";

export class AuthenticateUserController {
  constructor(
    private readonly authenticateUserUseCase: AuthenticateUserUseCase
  ){}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.authenticateUserUseCase.execute(email, password);

    return res.status(200).json({token});
  }
}