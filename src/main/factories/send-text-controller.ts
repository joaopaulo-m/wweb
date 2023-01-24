import { SendTextService } from "../../application/services/session/send-text"
import { VenomBotEngine } from "../../infrastructure/engines/venom-bot"
import { SendTextController } from "../../presentation/controllers/session/sendText"
import { VenomBot } from "../engines/venom-bot"

export const makeSendTextController = () => {
    const venom = new VenomBot()
    const engine = new VenomBotEngine(venom)
    const service = new SendTextService(engine)
    return new SendTextController(service)
}