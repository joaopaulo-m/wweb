import { CreateUserDTO } from "../../application/interfaces/create-user-dto";

export interface Repository {
    save: ({
        name,
        email,
        password,
        sessions,
        webhooks
    }: CreateUserDTO) => Promise<CreateUserDTO>

    findByEmail: (email: string) => Promise<CreateUserDTO> | null
}