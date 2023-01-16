import { TokenContract, TokenData } from "../../application/contracts/token";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

class JwtService implements TokenContract {

  sign({ email, password }: TokenData): string {
    
    const token = jwt.sign({ email, password }, String(process.env.JWT_SECRET));
    return token;
  }
}

export { JwtService };