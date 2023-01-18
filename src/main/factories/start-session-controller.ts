import { StartSessionService } from "../../application/services/session/start"
import { WppConnectEngine } from "../../infrastructure/engines/wpp-connect"
import { StartSessionController } from "../../presentation/controllers/session/start"
import { WppConnect } from "../engines/wpp-connect"

export const makeStartSessionController = () => {
  const wppConnect = new WppConnect()
  const engine = new WppConnectEngine(wppConnect)
  const service = new StartSessionService(engine)
  return new StartSessionController(service)
}