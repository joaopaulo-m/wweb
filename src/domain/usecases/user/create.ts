import { User } from '../../entities/user'
 
export interface CreateUserUseCase {
    execute: ({
        name,
        email,
        password,
        session,
        webhooks
     }: User) => Promise<User>
}   
