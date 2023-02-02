import { Client, LocalAuth } from 'whatsapp-web.js'
import axios from 'axios'
import { Sessions } from '../utils/sessions'

class WhatsappWebJs {

    async start(sessionName: string, webhooks: string, res: any) {
        
        let client = new Client({
            authStrategy: new LocalAuth({ clientId: sessionName })
        })

        client.initialize()

        client.on('qr', qrcode => {
            res.status(200).json({ qrcode })
        })

        client.on('message', message => {
            axios.post(webhooks, message.body)
        })

        client.on('ready', () => Sessions.createSession({
            name: sessionName,
            client
        }))
    }

    async sendText(sessionName: string, to: string, message: string) {
        const phone = `55${to}@c.us`
        const session = Sessions.getSession(sessionName);

        if (!session) throw new Error('You must start the session before sending messages!')
        
        const messageSent = await session.client.sendMessage(phone, message)
        return messageSent
    }
}

export { WhatsappWebJs }