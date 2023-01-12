export interface CryptProviderContract {
  createHash: (input: string, salt: number) => string
  compare: (input: string, hash: string) => boolean
}