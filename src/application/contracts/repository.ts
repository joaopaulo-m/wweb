import { UserDTO } from "./user-dto";

export interface RepositoryContract {
  save: ({
    name,
    email,
    password,
    session,
    webhooks
  }: UserDTO) => Promise<UserDTO>

  findByEmail: (email: string) => Promise<UserDTO | null>
}