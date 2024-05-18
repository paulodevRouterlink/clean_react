import { render, screen } from '@testing-library/react'
import { CardSurvey } from './card-survey'
import { mockSurveyModel } from '@/domain/test'

const makeSut = (survey = mockSurveyModel()): void => {
  render(<CardSurvey survey={survey} />)
}

describe('CardSurvey Component', () => {
  test('Should render with correct values', () => {
    const survey = Object.assign(mockSurveyModel(), {
      date: new Date('2024-04-16T00:00:00'),
    })
    makeSut(survey)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('16')
    expect(screen.getByTestId('month')).toHaveTextContent('abr')
    expect(screen.getByTestId('year')).toHaveTextContent('2024')
  })

  test('Should render with correct values', () => {
    const survey = Object.assign(mockSurveyModel(), {
      date: new Date('2019-03-03T00:00:00'),
    })
    makeSut(survey)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('mar')
    expect(screen.getByTestId('year')).toHaveTextContent('2019')
  })
})
