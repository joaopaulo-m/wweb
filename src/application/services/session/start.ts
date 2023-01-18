import { StartSessionUseCase } from "../../../domain/usecases/session/start";
import { WppEgineContract } from "../../contracts/wpp-engine";

class StartSessionService implements StartSessionUseCase {
  constructor(
    private readonly wppEngine: WppEgineContract
  ){}

  async execute(sessionName: string) {
    const qrcode = await this.wppEngine.start(sessionName);

    return qrcode;
  };
}

export { StartSessionService };