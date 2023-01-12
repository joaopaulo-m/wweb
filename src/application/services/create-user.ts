import { CreateUserUseCase } from "../../domain/usecases/create-user/create-user";
import { CreateUserDTO } from "../../domain/usecases/create-user/create-user-dto";
import { CryptProvider } from "../../infrastructure/providers/crypt";
import { Repository } from "../../infrastructure/repositories/repository";

class CreateUserService implements CreateUserUseCase {
    constructor(
        private readonly repository: Repository,
        private readonly cryptProvider: CryptProvider
    ){}

    async execute({ name, email, password, sessions, webhooks }: CreateUserDTO) {
        
        const userAlreadyExists = await this.repository.findByEmail(email)
        const passwordHash = this.cryptProvider.createHash(password, 8)
        
        if (userAlreadyExists) throw new Error('User already exists! Try logging in.')

        const user = await this.repository.save({
            name,
            email,
            password,
            sessions,
            webhooks
        });

        return user;
    };
}