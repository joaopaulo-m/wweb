import { WppEgineContract } from "../../application/contracts/wpp-engine";
import { WppConnectEngineContract } from "../contracts/wpp-connect";

export class WppConnectEngine implements WppEgineContract {
  constructor(
    private readonly engine: WppConnectEngineContract
  ){}

  async start(sessionName: string) {
    const qrcode = await this.engine.create(sessionName)
    
    return qrcode
  }
} 