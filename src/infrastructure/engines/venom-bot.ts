import { VenomBotEngineContract } from "../../application/contracts/venom-bot";
import { VenomBotEngineInterface } from "../contracts/venom-bot";

export class VenomBotEngine implements VenomBotEngineContract {
  constructor(
    private readonly engine: VenomBotEngineInterface
  ){}

  async start(sessionName: string, webhooks: string, httpResponse: any) {
    this.engine.create(sessionName, webhooks, httpResponse)
  }
} 