export interface VenomBotEngineContract {
  start: (sessionId: string, webhooks: string, httpReponse: any) => Promise<void>
}