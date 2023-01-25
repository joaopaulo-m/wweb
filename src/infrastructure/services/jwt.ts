import { TokenContract, TokenData } from "../../application/contracts/token";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { TokenProviderData } from "../../presentation/contracts/token";

class JwtService implements TokenContract {

  sign({ email, password }: TokenData): string {
    const token = jwt.sign({ email, password }, String(process.env.JWT_SECRET));
    return token;
  }

  verify({ token, secretKey }: TokenProviderData): any {
    const decoded = jwt.verify(token, secretKey)
    return decoded
  } 
}

export { JwtService };