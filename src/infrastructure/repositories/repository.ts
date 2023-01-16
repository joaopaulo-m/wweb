import { PrismaClient } from '@prisma/client'
import { RepositoryContract } from '../../application/contracts/repository';
import { UserDTO } from '../../application/contracts/user-dto';

class Repository implements RepositoryContract {

    constructor(
        private readonly ormService: RepositoryContract
    ){}

    async save({ name, email, password, sessions, webhooks }: UserDTO): Promise<UserDTO> {
        const user = await this.ormService.save({
            name, email, password, sessions, webhooks
        });
        if (!user) throw new Error('Unexpected error')

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.ormService.findByEmail(email);
        return user;
    }
}

export { Repository };