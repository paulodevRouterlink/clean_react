import { render, screen, waitFor } from '@testing-library/react'
import { SurveyList } from './survey-list'
import { ILoadSurveyList } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { mockLoadSurveyList } from '@/domain/test'
import { Errors } from '@/domain/errors'

class LoadSurveyListSpy implements ILoadSurveyList {
  callsCount: number = 0
  surveys = mockLoadSurveyList()

  async loadAll(): Promise<SurveyModel[]> {
    this.callsCount++
    return this.surveys
  }
}

type SutTypes = {
  loadSurveyListSpy: LoadSurveyListSpy
}

const makeSut = (loadSurveyListSpy = new LoadSurveyListSpy()): SutTypes => {
  render(<SurveyList loadSurveyList={loadSurveyListSpy} />)
  return { loadSurveyListSpy }
}

describe('Name of the group', () => {
  test('Should present 4 empty items on start', async () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-list')
    expect(surveyList.querySelectorAll('li:empty')).toHaveLength(4)
    await waitFor(() => surveyList)
  })

  test('Should call LoadSurveyList', async () => {
    const { loadSurveyListSpy } = makeSut()
    expect(loadSurveyListSpy.callsCount).toBe(1)
    await waitFor(() => screen.getByRole('heading'))
  })

  test('Should render CardSurvey on success', async () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-list')
    await waitFor(() => surveyList)
    expect(surveyList.querySelectorAll('li.survey_wrap')).toHaveLength(3)
  })

  test('Should render error on failure', async () => {
    const loadSurveyListSpy = new LoadSurveyListSpy()
    const error = new Errors.UnexpectedError()
    jest.spyOn(loadSurveyListSpy, 'loadAll').mockRejectedValueOnce(error)
    makeSut(loadSurveyListSpy)
    await waitFor(() => screen.getByRole('heading'))
    expect(screen.queryByTestId('survey-list')).not.toBeInTheDocument()
    expect(screen.getByTestId('error')).toHaveTextContent(error.message)
  })
})
