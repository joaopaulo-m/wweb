import { SendTextUseCase } from "../../../domain/usecases/session/send-text";

class SendTextController {

    constructor(
        private readonly sendTextUseCase: SendTextUseCase
    ){}

    async handle(sessionName: string, to: string, message: string) {
        const messageSent = await this.sendTextUseCase.execute(sessionName, to, message)

        return messageSent
    }
}

export { SendTextController }