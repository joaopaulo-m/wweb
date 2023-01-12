export interface BCryptContract {
  hash: (input: string, salt: number) => string
  compare: (input: string, hash: string) => boolean
}