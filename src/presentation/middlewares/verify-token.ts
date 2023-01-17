import { HttpResponse } from "../contracts/http-response";
import { TokenProviderContract, TokenProviderData } from "../contracts/token";

class VerifyTokenMiddleware {

  constructor(
    private readonly tokenProvider: TokenProviderContract
  ){}

  handle({ token, secretKey }: TokenProviderData): HttpResponse {
      try {
        const decoded = this.tokenProvider.verify({ token, secretKey })

        return {
          statusCode: 200,
          data: decoded
        }
      } catch(err) {
        return {
          statusCode: 401,
          data: {
            error: `Token invalid! Erro message: ${err}`
          }
        }
      }
  }
}

export { VerifyTokenMiddleware };