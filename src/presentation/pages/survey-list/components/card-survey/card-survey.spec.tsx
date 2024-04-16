import { render, screen } from '@testing-library/react'
import { CardSurvey } from './card-survey'
import { mockSurveyModel } from '@/domain/test'

describe('CardSurvey Component', () => {
  test('Should render with correct values', () => {
    const survey = mockSurveyModel()
    survey.date = new Date('2024-04-16T00:00:00')
    render(<CardSurvey survey={survey} />)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('16')
    expect(screen.getByTestId('month')).toHaveTextContent('abr')
    expect(screen.getByTestId('year')).toHaveTextContent('2024')
  })
})
