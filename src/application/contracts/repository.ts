import { UserDTO } from "./user-dto";

export interface RepositoryContract {
  save: ({
    name,
    email,
    password,
    sessions,
    webhooks
  }: UserDTO) => Promise<UserDTO>

  findByEmail: (email: string) => Promise<UserDTO | null>
}