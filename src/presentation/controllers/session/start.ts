import { StartSessionUseCase } from "../../../domain/usecases/session/start";
import { HttpResponse } from "../../contracts/http-response";

class StartSessionController {

  constructor(
    private readonly startSessionUseCase: StartSessionUseCase
  ){}

  handle(sessionName: string, webhooks: string, httpResponse: any) {
    this.startSessionUseCase.execute(sessionName, webhooks, httpResponse)
  }
}

export { StartSessionController }