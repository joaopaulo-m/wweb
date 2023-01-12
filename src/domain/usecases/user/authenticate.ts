export interface AuthenticateUserUseCase {
  execute: (email: string, password: string) => Promise<string>
}