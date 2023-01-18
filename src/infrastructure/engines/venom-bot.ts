import { WppEgineContract } from "../../application/contracts/wpp-engine";
import { RequestServiceContract } from "../contracts/request-service";
import { VenomEngineContract } from "../contracts/venom";


export class VenomBotEngine implements WppEgineContract {
  constructor(
    private readonly engine: VenomEngineContract
  ) {}

  async start(sessionName: string) {
    const qrcode = await this.engine.create(sessionName)
    return qrcode
  }
}