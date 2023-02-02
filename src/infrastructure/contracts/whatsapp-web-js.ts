export interface WhatsappWebJsContract {
    start: (sessionName: string, webhooks: string, httpResponse: any) => Promise<string>
    sendText: (sessionName: string, to: string, httpResponse: any) => Promise<any>
}