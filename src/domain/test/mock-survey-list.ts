import { faker } from '@faker-js/faker'
import { SurveyModel } from '@/domain/models'

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.string.uuid(),
  question: faker.word.words(),
  answers: [
    {
      answer: faker.word.words(4),
      image: faker.internet.url(),
    },
    {
      answer: faker.word.words(5),
    },
  ],
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent(),
})

export const mockLoadSurveyList = (): SurveyModel[] => [
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel(),
]
