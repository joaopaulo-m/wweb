export interface SendTextUseCase {
    execute: (sessionName: string, to: string, message: string) => Promise<any>
}