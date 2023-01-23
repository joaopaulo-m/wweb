import { User } from "../../../domain/entities/user";
import { CreateUserUseCase } from "../../../domain/usecases/user/create";
import { CryptServiceContract } from "../../contracts/crypt";
import { RepositoryContract } from "../../contracts/repository";

export class CreateUserService implements CreateUserUseCase {
    constructor(
        private readonly repository: RepositoryContract,
        private readonly cryptProvider: CryptServiceContract
    ){}

    async execute({ name, email, password, session, webhooks }: User) {
        
        const userAlreadyExists = await this.repository.findByEmail(email)
        const passwordHash = await this.cryptProvider.createHash(password, 8)
        
        if (userAlreadyExists) throw new Error('User already exists! Try logging in.')

        const user = await this.repository.save({
            name,
            email,
            password: passwordHash,
            webhooks
        });

        return user;
    };
}