export type TokenData = {
  email: string
  password: string
}

export interface TokenContract  {
  sign: ({ email, password }: TokenData, secretKey: string) => string
}