import { User } from "../../domain/entities/user";

export type HttpRequest = {
  name?: string
  email: string
  password: string
  session?: Session
  webhooks?: string
};

type Session = {
  sessionName: string
  active?: boolean
}
