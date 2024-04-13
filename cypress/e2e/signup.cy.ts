import { faker } from '@faker-js/faker'
import * as FormHelper from '../support/helpers/form-helpers'
import * as Http from '../support/helpers/signup-mocks'

const populateFieldsSignUp = () => {
  const password = faker.string.alphanumeric(5)
  cy.getByTestId('name').focus().type(faker.internet.displayName())
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(password)
  cy.getByTestId('passwordConfirmation').focus().type(password)
}

const simulateFormSubmit = () => {
  populateFieldsSignUp()
  cy.getByTestId('submit').click()
}

describe('SignUp Component', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('name').should('have.attr', 'readonly')
    FormHelper.testInputStatus('name', 'Campo Obrigatório', '🔴')
    cy.getByTestId('email').should('have.attr', 'readonly')
    FormHelper.testInputStatus('email', 'Campo Obrigatório', '🔴')
    cy.getByTestId('password').should('have.attr', 'readonly')
    FormHelper.testInputStatus('password', 'Campo Obrigatório', '🔴')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readonly')
    FormHelper.testInputStatus(
      'passwordConfirmation',
      'Campo Obrigatório',
      '🔴',
    )
    cy.getByTestId('submit').should('have.attr', 'disabled')
    FormHelper.testErrorWrap()
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.string.alphanumeric(3))
    FormHelper.testInputStatus('name', 'Valor inválido', '🔴')
    cy.getByTestId('email').focus().type(faker.word.words())
    FormHelper.testInputStatus('email', 'Valor inválido', '🔴')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(3))
    FormHelper.testInputStatus('password', 'Valor inválido', '🔴')
    cy.getByTestId('passwordConfirmation')
      .focus()
      .type(faker.string.alphanumeric(4))
    FormHelper.testInputStatus('passwordConfirmation', 'Valor inválido', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    FormHelper.testErrorWrap()
  })

  it('Should present valid state if form is valid', () => {
    const password = faker.string.alphanumeric(5)
    cy.getByTestId('name').focus().type(faker.internet.displayName())
    FormHelper.testInputStatus('name', 'Tudo Certo!', '🟢')
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email', 'Tudo Certo!', '🟢')
    cy.getByTestId('password').focus().type(password)
    FormHelper.testInputStatus('password', 'Tudo Certo!', '🟢')
    cy.getByTestId('passwordConfirmation').focus().type(password)
    FormHelper.testInputStatus('passwordConfirmation', 'Tudo Certo!', '🟢')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    FormHelper.testErrorWrap()
  })

  it('Should present EmailInUserError on 403', () => {
    Http.mockEmailInUserError()
    simulateFormSubmit()
    FormHelper.testErrorWrap()
    FormHelper.testUrl('signup')
  })

  it('Should prevent multiple submits', () => {
    Http.mockOkay()
    populateFieldsSignUp()
    cy.getByTestId('submit').dblclick()
    cy.get('@request.all').should('have.length', 0)
  })
})
