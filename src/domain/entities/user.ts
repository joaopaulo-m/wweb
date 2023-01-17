export type User = {
    name?: string
    email: string
    password: string
    webhooks?: string
    sessions?: Session[]
}

type Session = {
    id: string
    active: boolean
}