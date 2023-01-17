import { TokenProviderData } from "../../presentation/contracts/token"

export type TokenData = {
  email: string
  password: string
}

export interface TokenContract  {
  sign: ({ email, password }: TokenData, secretKey: any) => string,
  verify: ({ token, secretKey }: TokenProviderData) => any
}