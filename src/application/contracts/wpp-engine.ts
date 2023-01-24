export interface WppEngineContract {
  start: (sessionId: string, webhooks: string, httpReponse: any) => Promise<void>
  sendText: (sessionName: string, to: string, message: string) => Promise<any>
}