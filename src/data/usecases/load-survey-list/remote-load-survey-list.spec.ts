import { faker } from '@faker-js/faker'
import { RemoteLoadSurveyList } from './remote-load-survey-list'
import { HttpGetClientSpy } from '@/data/test'
import { Errors } from '@/domain/errors'
import { HttpStatusCode } from '@/data/protocols/http'
import { SurveyModel } from '@/domain/models'
import { mockLoadSurveyList } from '@/domain/test'

type SutTypes = {
  httpGetClientSpy: HttpGetClientSpy<SurveyModel[]>
  sut: RemoteLoadSurveyList
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<SurveyModel[]>()
  const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
  return { sut, httpGetClientSpy }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const URL = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(URL)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(URL)
  })

  test('Should throw UnexpectedError if HttpGetClient return 403', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new Errors.UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient return 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new Errors.UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient return 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new Errors.UnexpectedError())
  })

  test('Should return a list of SurveyModels if HttpGetClient return 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockLoadSurveyList()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual(httpResult)
  })

  test('Should return an empty list if HttpGetClient return 204', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.noContent,
    }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual([])
  })
})
