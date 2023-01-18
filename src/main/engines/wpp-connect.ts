import wppconnect, { create, Whatsapp } from '@wppconnect-team/wppconnect'

export class WppConnect {
  async create(sessionName: string) {
    let qrcode = ''

    const session = await create({
      session: 'session',
      catchQR: (base64, asciiQR, attempt) => {
        qrcode = base64
      },
      logQR: false,
      puppeteerOptions: {
        userDataDir: `./tokens/${sessionName}`,
      },
    })

    return qrcode
  }
}