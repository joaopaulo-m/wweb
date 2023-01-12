import { CreateUserDTO } from "./create-user-dto";

export interface RepositoryContract {
  save: ({
    name,
    email,
    password,
    sessions,
    webhooks
  }: CreateUserDTO) => Promise<CreateUserDTO>

  findByEmail: (email: string) => Promise<CreateUserDTO> | null
}