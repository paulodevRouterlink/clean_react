import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@/data/protocols/http'
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = any

export class AxiosHttpClient implements HttpPostClient<Props, Props> {
  async post(params: HttpPostParams<Props>): Promise<HttpResponse<Props>> {
    const httpResponse = await axios.post(params.url, params.body)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
