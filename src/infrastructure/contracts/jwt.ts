import { TokenData } from "../../application/contracts/token";

export interface JwtContract {
  sign: ({ email, password }: TokenData, secretKey: string ) => string
}