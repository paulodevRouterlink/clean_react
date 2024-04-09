import { faker } from '@faker-js/faker'
import { ValidationComposite } from './validate-composite'
import { FieldValidationSpy } from '@/validation/validators'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeFieldName = (fieldName: string) => [
  new FieldValidationSpy(fieldName),
  new FieldValidationSpy(fieldName),
]

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = makeFieldName(fieldName)
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return { sut, fieldValidationsSpy }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    const errorMessage = faker.word.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.word.words())
    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBe(error)
  })

  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBeFalsy()
  })
})
