import { StartSessionService } from "../../application/services/session/start"
import { VenomBotEngine } from "../../infrastructure/engines/venom-bot"
import { StartSessionController } from "../../presentation/controllers/session/start"
import { VenomBot } from "../engines/venom-bot"

export const makeStartSessionController = () => {
  const venomBot = new VenomBot()
  const engine = new VenomBotEngine(venomBot)
  const service = new StartSessionService(engine)
  return new StartSessionController(service)
}