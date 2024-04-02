import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
