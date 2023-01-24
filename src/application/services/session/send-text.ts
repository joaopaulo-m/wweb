import { SendTextUseCase } from "../../../domain/usecases/session/send-text";
import { WppEngineContract } from "../../contracts/wpp-engine";

class SendTextService implements SendTextUseCase {

    constructor(
        private readonly wppEngine: WppEngineContract 
    ){}

    async execute(sessionName: string, to: string, message: string) {
        const messageSent = await this.wppEngine.sendText(sessionName, to, message)

        return messageSent
    }
}

export { SendTextService }