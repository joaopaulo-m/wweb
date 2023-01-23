export interface StartSessionUseCase {
  execute: (sessionName: string, webhooks: string, httpResponse: any) => void
}