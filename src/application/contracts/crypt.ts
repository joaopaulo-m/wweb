export interface CryptProviderContract {
  createHash: (input: string, salt: number) => string
}