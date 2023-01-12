import { CryptProviderContract } from "../../application/contracts/crypt";
import { BCryptContract } from "../contracts/crypt";

export class CryptProvider implements CryptProviderContract {
    constructor(
        private readonly bcrypt: BCryptContract
    ) {}

    createHash(input: string, salt: number) {
        const hash = this.bcrypt.hash(input, salt);

        return hash;
    }
}