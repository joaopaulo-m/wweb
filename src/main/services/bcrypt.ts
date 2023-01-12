import { CryptProviderContract } from "../../application/contracts/crypt";
import { TokenContract, TokenData } from "../../application/contracts/token";
import { CryptProvider } from "../../infrastructure/providers/crypt";

export class BcryptService implements CryptProviderContract {
  constructor(
    private bcrypt: any
  ){}

  createHash(input: string, salt: number) {
      const hash = this.bcrypt.hash(input, salt)
      return hash;
  }

  compare(input: string, hash: string): boolean {
    const isValid = this.bcrypt.compare(input, hash);
    return isValid
  }
}