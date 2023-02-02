import { Whatsapp } from "venom-bot"

type Session = {
    name: string,
    client: any,
    tokens?: Token
}

type Token = {
    browserId: string
    secretBundle: string
    token1: string,
    token2: string

}


class Sessions {
    static sessions = new Array()

    static createSession({ name, client, tokens }: Session) {
        let session = { name, client, tokens }
        
        this.sessions.push(session)
    }

    static getSession(name: string): Session {
        return this.sessions.filter(session => session.name == name)[0]
    }
}

export { Sessions }