import { User } from '../../entities/user'
 
export interface CreateUserUseCase {
    execute: ({
        name,
        email,
        password,
        sessions,
        webhooks
     }: User) => Promise<User>
}   
