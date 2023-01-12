import { UserDTO } from "../../application/contracts/user-dto";
import { RepositoryContract } from "../../application/contracts/repository";
import { sqlRepositoryContract } from "../contracts/sql";

export class Repository implements RepositoryContract {
    constructor(
        private readonly sqlRepository: sqlRepositoryContract
    ) { }

    async save({ name, email, password, sessions, webhooks }: UserDTO): Promise<UserDTO> {
        const user = await this.sqlRepository.save({
            name, email, password, sessions, webhooks
        });

        return user;
    }

    async findByEmail(email: string): Promise<UserDTO | undefined> {
        const user = await this.sqlRepository.findByEmail(email);

        return user;
    }
}