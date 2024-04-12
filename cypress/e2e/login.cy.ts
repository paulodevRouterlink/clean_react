import { faker } from '@faker-js/faker'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('signin')
  })

  it('Should load with correct with state', () => {
    cy.getByTestId('email').should('have.attr', 'readonly')
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo Obrigatório')
      .should('contain.text', '🔴')
    cy.getByTestId('password').should('have.attr', 'readonly')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo Obrigatório')
      .should('contain.text', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.word.words())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(3))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Tudo Certo!')
      .should('contain.text', '🟢')
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Tudo Certo!')
      .should('contain.text', '🟢')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error if invalid credentials are provided', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    cy.getByTestId('spinner').should('exist')
    cy.getByTestId('main-error').should('not.exist')
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
    ).as('getUsers')
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    cy.getByTestId('spinner').should('exist')
    cy.getByTestId('main-error').should('not.exist')
    cy.getByTestId('spinner').should('not.exist')
  })
})
