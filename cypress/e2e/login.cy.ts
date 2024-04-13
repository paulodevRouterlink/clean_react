import { faker } from '@faker-js/faker'
import * as FormHelper from '../support/form-helpers'

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
    FormHelper.testErrorWrap()
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.word.words())
    FormHelper.testInputStatus('email', 'Valor inválido', '🔴')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(3))
    FormHelper.testInputStatus('password', 'Valor inválido', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    FormHelper.testErrorWrap()
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email', 'Tudo Certo!', '🟢')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    FormHelper.testInputStatus('password', 'Tudo Certo!', '🟢')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    FormHelper.testErrorWrap()
  })

  it('Should present error if invalid credentials are provided', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    FormHelper.testSpinnerExists()
    cy.getByTestId('spinner').should('not.exist')
    cy.getByTestId('main-error').should('exist')
  })

  it('Should present save accessToken if valid credentials provided', () => {
    cy.intercept(
      {
        method: 'POST', // Route all GET requests
        url: /signin/, // that have a URL that matches '/users/*'
      },
      [], // and force the response to be: []
    ).as('signIn')
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    FormHelper.testSpinnerExists()
    cy.getByTestId('spinner').should('not.exist')
  })
})
