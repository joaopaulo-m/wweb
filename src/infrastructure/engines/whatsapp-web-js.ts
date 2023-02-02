import { WppEngineContract } from "../../application/contracts/wpp-engine";
import { WhatsappWebJsContract } from "../contracts/whatsapp-web-js";

class WhatsappWebJsEngine implements WppEngineContract {

    constructor(
        private readonly engine: WhatsappWebJsContract
    ){}

    async start(sessionName: string, webhooks: string, httpResponse: any) {
        this.engine.start(sessionName, webhooks, httpResponse);
    }

    async sendText(sessionName: string, to: string, mesasge: string) {
        const message = await this.engine.sendText(sessionName, to, mesasge)

        return message
    }
}

export { WhatsappWebJsEngine }