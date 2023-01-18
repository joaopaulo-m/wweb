export interface RequestServiceContract {
  post: ({ method, url, data }: HttpRequest) => Promise<any>
}

export type HttpRequest = {
  method: string
  url: string
  data: Data
}

type Data = {
  message: string
  from: string
}