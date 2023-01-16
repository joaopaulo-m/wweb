import { CryptServiceContract } from "../../application/contracts/crypt";
import bcrypt from 'bcrypt'

class BcryptService implements CryptServiceContract {

  async createHash(input: string, salt: number) {
    const hash = await bcrypt.hash(input, salt);
    return hash;
  }

  async compare(input: string, hash: string) {
    const isHashValid = await bcrypt.compare(input, hash);
    return isHashValid;
  }
}

export { BcryptService };