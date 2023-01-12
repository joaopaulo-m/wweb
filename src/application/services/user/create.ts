import { User } from "../../../domain/entities/user";
import { CreateUserUseCase } from "../../../domain/usecases/user/create";
import { CryptProviderContract } from "../../contracts/crypt";
import { RepositoryContract } from "../../contracts/repository";

export class CreateUserService implements CreateUserUseCase {
    constructor(
        private readonly repository: RepositoryContract,
        private readonly cryptProvider: CryptProviderContract
    ){}

    async execute({ name, email, password, sessions, webhooks }: User) {
        
        const userAlreadyExists = await this.repository.findByEmail(email)
        const passwordHash = this.cryptProvider.createHash(password, 8)
        
        if (userAlreadyExists) throw new Error('User already exists! Try logging in.')

        const user = await this.repository.save({
            name,
            email,
            password: passwordHash,
            sessions,
            webhooks
        });

        return user;
    };
}