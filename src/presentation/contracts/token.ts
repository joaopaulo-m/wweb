export type TokenProviderData = {
  token: string,
  secretKey: any
}

export interface TokenProviderContract {
  verify: ({ token, secretKey }: TokenProviderData) => any
}