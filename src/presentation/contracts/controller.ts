import { HttpRequest } from "./http-request";
import { HttpResponse } from "./http-response";
import { User } from '../../domain/entities/user'

export interface Controller {
  handle: ({}: HttpRequest) => Promise<HttpResponse>
}