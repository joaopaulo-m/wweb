export interface StartSessionUseCase {
  execute: (sessionName: string, webhooks: string) => void
}