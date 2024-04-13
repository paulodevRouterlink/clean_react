import { faker } from '@faker-js/faker'
import * as FormHelper from '../support/form-helpers'

describe('SignUp Component', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('should ', () => {
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
})
