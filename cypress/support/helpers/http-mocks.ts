import { faker } from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept(
    {
      method: 'POST',
      url,
    },
    {
      statusCode: 401,
      body: {
        error: faker.word.words(),
      },
    },
  ).as('request')
}

export const mockForbiddenError = (url: RegExp, method: string): void => {
  cy.intercept(
    {
      method,
      url,
    },
    {
      statusCode: 403,
      body: {
        error: faker.word.words(),
      },
    },
  ).as('request')
}

export const mockServerError = (url: RegExp, method: string): void => {
  cy.intercept(
    {
      method,
      url,
    },
    {
      statusCode: faker.helpers.arrayElements([400, 404, 500]),
      body: {
        error: faker.word.words(),
      },
    },
  ).as('request')
}

export const mockOk = (url: RegExp, method: string, response: object): void => {
  cy.intercept(
    {
      method,
      url,
    },
    {
      statusCode: 200,
      response,
    },
  ).as('request')
}
