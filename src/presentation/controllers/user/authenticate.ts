import { AuthenticateUserUseCase } from "../../../domain/usecases/user/authenticate";
import { Controller } from "../../contracts/controller";
import { HttpRequest } from "../../contracts/http-request";
import { HttpResponse } from "../../contracts/http-response";

class AuthenticateUserController implements Controller {

  constructor(
    private readonly authenticateUserUseCase: AuthenticateUserUseCase
  ) {}

  async handle({ email, password }: HttpRequest): Promise<HttpResponse> {
    try {
      const token = await this.authenticateUserUseCase.execute(email, password);
      return {
        statusCode: 200,
        data: token
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}

export { AuthenticateUserController };