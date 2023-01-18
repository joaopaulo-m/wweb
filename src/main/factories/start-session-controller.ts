import { StartSessionService } from "../../application/services/session/start";
import { VenomBotEngine } from "../../infrastructure/engines/venom-bot";
import { AxiosService } from "../../infrastructure/services/axios";
import { StartSessionController } from "../../presentation/controllers/session/start";
import { VenomBot } from "../engines/venom";

export const makeStartSessionController = () => {
  const requestService = new AxiosService()
  const venomEngine = new VenomBot();
  const engine = new VenomBotEngine(venomEngine)
  const service = new StartSessionService(engine)
  return new StartSessionController(service)
}