export interface StartSessionUseCase {
  execute: (sessionName: string) => Promise<any>
}