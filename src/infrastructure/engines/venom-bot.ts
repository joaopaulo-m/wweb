import { WppEngineContract } from "../../application/contracts/wpp-engine";
import { VenomBotEngineContract } from "../contracts/venom-bot";

export class VenomBotEngine implements WppEngineContract {
  constructor(
    private readonly engine: VenomBotEngineContract
  ){}

  async start(sessionName: string, webhooks: string, httpResponse: any) {
    this.engine.create(sessionName, webhooks, httpResponse)
  }

  async sendText(sessionName: string, to: string, message: string) {
    const messageSent = await this.engine.sendText(sessionName, to, message)
    
    return messageSent
  }
} 