export interface CryptProvider {
    createHash: (input: string, salt: number) => string
}