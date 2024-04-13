import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import { mockGetRequest, mockPostRequest } from '@/data/test/http'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  describe('post', () => {
    test('Should call axios.post with correct values', async () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.post(request)
      expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })
    test.skip('Should return correct response on axios.post', async () => {
      const { sut, mockedAxios } = makeSut()
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })

    test.skip('Should return correct error on axios.post', () => {
      const { sut, mockedAxios } = makeSut()
      mockedAxios.post.mockResolvedValueOnce({
        response: mockHttpResponse(),
      })
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
  })

  describe('get', () => {
    test('Should call axios.get with correct values', async () => {
      const request = mockGetRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.get(request)
      expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
    })
  })
})
