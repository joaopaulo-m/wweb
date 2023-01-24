import { StartSessionUseCase } from "../../../domain/usecases/session/start";
import { WppEngineContract } from "../../contracts/wpp-engine";

class StartSessionService implements StartSessionUseCase {
  constructor(
    private readonly wppEngine: WppEngineContract
  ){}

  execute(sessionName: string, webhooks: string, httpReponse: any) {
    this.wppEngine.start(sessionName, webhooks, httpReponse);
  };
}

export { StartSessionService };