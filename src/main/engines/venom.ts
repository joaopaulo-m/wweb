import venom from 'venom-bot'


class VenomBot {

  async create(sessionName: string) {
    try {
      let qrcode = ''

      await venom.create(
        sessionName,
        (base64Qr, asciiQR, attempts, urlCode) => {
          console.log(asciiQR)
          qrcode = base64Qr
        }
      )

      return qrcode
    } catch (err) {
      return err
    }
  }
}

export { VenomBot }