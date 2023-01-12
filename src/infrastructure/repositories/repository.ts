import { UserContract } from "../../application/contracts/user";

export interface Repository {
    save: ({
        name,
        email,
        password,
        sessions,
        webhooks
    }: UserContract) => Promise<UserContract>

    findByEmail: (email: string) => Promise<UserContract> | null
}