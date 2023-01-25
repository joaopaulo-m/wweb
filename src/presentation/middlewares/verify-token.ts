import { HttpResponse } from "../contracts/http-response";
import { TokenProviderContract, TokenProviderData } from "../contracts/token";

class VerifyTokenMiddleware {

  constructor(
    private readonly tokenProvider: TokenProviderContract
  ){}

  handle({ token, secretKey }: TokenProviderData) {
    try {
      const decoded = this.tokenProvider.verify({ token, secretKey })
      return decoded
   } catch(err) {
    return err
   }
  }
}

export { VerifyTokenMiddleware };