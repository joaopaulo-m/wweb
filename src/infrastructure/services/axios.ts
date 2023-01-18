import { HttpRequest, RequestServiceContract } from "../contracts/request-service";
import axios from 'axios'

class AxiosService implements RequestServiceContract {

  async post({ method, url, data }: HttpRequest) {
    const response = await axios({
      method,
      url,
      data
    });

    return response;
  }
}

export { AxiosService }