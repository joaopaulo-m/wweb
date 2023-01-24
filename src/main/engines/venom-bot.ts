import { create, Whatsapp } from 'venom-bot'
import axios from 'axios'
import { Response } from 'express'
import { Sessions } from '../utils/sessions'

export class VenomBot {

  async create(sessionName: string, webhooks: string, res: Response) {
    let sessionData = Sessions.getSession(sessionName)

    const session = await create(
      sessionName,
      (base64) => {
        res.status(200).json({ qrcode: base64 })
      },
      (statusSession: string, session: string) => {
        if (statusSession === 'isLogged') res.status(200).json({ msg: 'connected!' })
      },
      {
        multidevice: true, // for version not multidevice use false.(default: true)
        folderNameToken: sessionName, //folder name when saving tokens
        mkdirFolderToken: '/tokens',
        headless: true, // Headless chrome
        devtools: false, // Open devtools by default
        useChrome: true, // If false will use Chromium instance
        logQR: true,
        autoClose: 60000,
      },
      {
        WABrowserId: (sessionData) ? sessionData.tokens.browserId : '',
        WASecretBundle: (sessionData) ? sessionData.tokens.secretBundle : '',
        WAToken1: (sessionData) ? sessionData.tokens.token1 : '',
        WAToken2: (sessionData) ? sessionData.tokens.token2 : ''
      }
    )

    if (!sessionData) {
      let sessionTokens = await session.getSessionTokenBrowser()

      Sessions.createSession({
        name: sessionName,
        client: session,
        tokens: {
          browserId: sessionTokens.WABrowserId,
          secretBundle: sessionTokens.WASecretBundle,
          token1: sessionTokens.WAToken1,
          token2: sessionTokens.WAToken2,
        }
      })
    }

    this.start(sessionName, webhooks)
  }

  start(sessionName: string, webhooks: string) {
    let session = Sessions.getSession(sessionName)

    session.client.onAnyMessage(async message => {
      await axios.post(webhooks, message)
    })
  }

  async sendText(sessionName: string, to: string, message: string) {
    let session = Sessions.getSession(sessionName)
    let phone = `55${to}@c.us`

    let messageSent = await session.client.sendText(phone, message)
    return messageSent
  }
}