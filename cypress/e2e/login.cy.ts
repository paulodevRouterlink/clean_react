import { faker } from '@faker-js/faker'
import * as FormHelper from '../support/helpers/form-helpers'
import * as Helper from '../support/helpers/helpers'
import * as Http from '../support/helpers/http-mocks'

const path = /signin/

const mockOkay = (): void => {
  return Http.mockOk(path, 'POST', { accessToken: faker.string.uuid() })
}

const populateFields = (): void => {
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('Login', () => {
  beforeEach(() => {
    cy.visit('signin')
  })

  it('Should load with correct with state', () => {
    cy.getByTestId('email').should('have.attr', 'readonly')
    FormHelper.testInputStatus('email', 'Campo Obrigatório', '🔴')
    cy.getByTestId('password').should('have.attr', 'readonly')
    FormHelper.testInputStatus('password', 'Campo Obrigatório', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    Helper.testErrorWrap()
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.word.words())
    FormHelper.testInputStatus('email', 'Valor inválido', '🔴')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(3))
    FormHelper.testInputStatus('password', 'Valor inválido', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    Helper.testErrorWrap()
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email', 'Tudo Certo!', '🟢')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    FormHelper.testInputStatus('password', 'Tudo Certo!', '🟢')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    Helper.testErrorWrap()
  })

  it('Should present error if invalid credentials are provided', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    FormHelper.testMainError()
    cy.getByTestId('spinner').should('not.exist')
    cy.getByTestId('main-error').should('exist')
  })

  it('Should present save accessToken if valid credentials provided', () => {
    simulateValidSubmit()
    FormHelper.testMainError()
    Helper.testUrl('signin')
  })

  it('Should prevent multiple submits', () => {
    mockOkay()
    populateFields()
    cy.getByTestId('submit').dblclick()
    cy.get('@request.all').should('have.length', 0)
  })

  it('Should not call submit if form is invalid', () => {
    mockOkay()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    cy.get('@request.all').should('have.length', 0)
  })
})
