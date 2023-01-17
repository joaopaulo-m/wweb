import { WppEgineContract } from "../../application/contracts/wpp-engine";
import venom from 'venom-bot'


export class VenomBotEngine implements WppEgineContract {
  constructor(
    public qrcode: string
  ){}

  async start(sessionName: string, webhooks: string) {
    const session = await venom.create(
      sessionName,
      base64Qrimg => {
        this.exportQR(base64Qrimg)
      }
    )
    return this.qrcode;
  }

  exportQR(base64Qrimg: string) {
    this.qrcode = base64Qrimg
  }
}