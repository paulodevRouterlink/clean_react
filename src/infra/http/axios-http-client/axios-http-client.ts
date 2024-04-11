/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'
import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@/data/protocols/http'

type Props = any

export class AxiosHttpClient implements HttpPostClient<Props, Props> {
  async post(params: HttpPostParams<Props>): Promise<HttpResponse<Props>> {
    let httpResponse: AxiosResponse<Props>
    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
