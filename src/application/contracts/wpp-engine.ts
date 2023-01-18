export interface WppEgineContract {
  start: (sessionId: string) => Promise<string>
}