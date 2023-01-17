import { CreateUserUseCase } from "../../../domain/usecases/user/create";
import { Controller } from "../../contracts/controller";
import { HttpRequest } from "../../contracts/http-request";
import { HttpResponse } from "../../contracts/http-response";

class CreateUserController implements Controller {

  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async handle({ name, email, password, sessions, webhooks }: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
        sessions,
        webhooks
      });
  
      return {
        statusCode: 200,
        data: user
      }
    } catch(err) {
      return {
        statusCode: 500,
        data: err
      }
    }
  }
}

export { CreateUserController };