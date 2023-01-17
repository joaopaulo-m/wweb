import { JwtService } from "../../infrastructure/services/jwt"
import { VerifyTokenMiddleware } from "../../presentation/middlewares/verify-token"

export const makeVerifyTokenMiddleware = () => {
  const tokenProvider = new JwtService()
  return new VerifyTokenMiddleware(tokenProvider)
}