import { Request, Response } from "express";
import { AuthenticateUserService } from "../../../application/services/user/authenticate";;

export class AuthenticateUserController {
  constructor(
    private readonly authenticateUserService: AuthenticateUserService
  ){}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.authenticateUserService.execute(email, password);

    return res.status(200).json({token});
  }
}