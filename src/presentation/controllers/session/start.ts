import { StartSessionUseCase } from "../../../domain/usecases/session/start";
import { HttpResponse } from "../../contracts/http-response";

class StartSessionController {

  constructor(
    private readonly startSessionUseCase: StartSessionUseCase
  ){}

  async handle(sessionName: string): Promise<HttpResponse> {
    const qrcode = await this.startSessionUseCase.execute(sessionName)

      return {
        statusCode: 200,
        data: { qrcode }
      }
  }
}

export { StartSessionController }