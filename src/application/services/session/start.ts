import { StartSessionUseCase } from "../../../domain/usecases/session/start";
import { VenomBotEngineContract } from "../../contracts/venom-bot";

class StartSessionService implements StartSessionUseCase {
  constructor(
    private readonly venomBotEngine: VenomBotEngineContract
  ){}

  execute(sessionName: string, webhooks: string, httpReponse: any) {
    this.venomBotEngine.start(sessionName, webhooks, httpReponse);
  };
}

export { StartSessionService };