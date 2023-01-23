import { create, Whatsapp } from 'venom-bot'
import axios from 'axios'
import { Response } from 'express'

export class VenomBot {

  async create(sessionName: string, webhooks: string, res: Response) {
    const session = await create(
      sessionName,
      (base64) => {
        res.status(200).json({ qrcode: base64 })
      },
      (statusSession: string, session: string) => {
        console.log('Status Session: ', statusSession)
        console.log('Session name: ', session);
      },
      {
        multidevice: false, // for version not multidevice use false.(default: true)
        folderNameToken: 'tokens', //folder name when saving tokens
        mkdirFolderToken: '/tokens',
        headless: true, // Headless chrome
        devtools: false, // Open devtools by default
        useChrome: true, // If false will use Chromium instance
        logQR: true,
        autoClose: 60000,
      },
    )

    session.onMessage(message => {
      axios({
        method: 'post',
        url: webhooks,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: message
      })
    })
  }
}
