import { UserDTO } from "../../application/contracts/user-dto"

export interface sqlRepositoryContract {
  save: ({
    name,
    email,
    password,
    sessions,
    webhooks
  }: UserDTO) => Promise<UserDTO>

  findByEmail: (email: string) => Promise<UserDTO | undefined>
}