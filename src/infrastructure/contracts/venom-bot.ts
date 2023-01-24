export interface VenomBotEngineContract {
  create: (sessionName: string, webhooks: string, httpResponse: any) => Promise<void>
  sendText: (sessionName: string, to: string, message: string) => Promise<any>
}