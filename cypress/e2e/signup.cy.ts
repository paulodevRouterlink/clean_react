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
})
