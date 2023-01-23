export interface VenomBotEngineInterface {
  create: (sessionName: string, webhooks: string, httpResponse: any) => Promise<void>
}