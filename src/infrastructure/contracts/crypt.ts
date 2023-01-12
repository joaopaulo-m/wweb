export interface BCryptContract {
  hash: (input: string, salt: number) => string
}