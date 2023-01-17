import { Session } from './session'

export type User = {
    name?: string
    email: string
    password: string
    webhooks?: string
    sessions?: Session[]
}

