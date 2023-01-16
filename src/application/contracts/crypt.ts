export interface CryptServiceContract {
  createHash: (input: string, salt: number) => Promise<string>
  compare: (input: string, hash: string) => Promise<boolean>
}