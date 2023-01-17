export interface WppEgineContract {
  start: (sessionId: string, webhooks: string) => Promise<string>
}