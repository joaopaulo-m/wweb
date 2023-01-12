import { TokenContract, TokenData } from "../../application/contracts/token";
import { JwtContract } from "../contracts/jwt";

class TokenProvider implements TokenContract {
  
  constructor(
    private readonly jwt: JwtContract
  ){}

    sign({ email, password }: TokenData, secretKey: string) {
      
      const token = this.jwt.sign({ email, password }, secretKey)
      return token
    }
}