const baseUrl: string = Cypress.config().baseUrl

export const testInputStatus = (field: string, value: string, text: string) => {
  cy.getByTestId(`${field}-status`)
    .should('have.attr', 'title', value)
    .should('contain.text', text)
}

export const testErrorWrap = () => {
  cy.getByTestId('error-wrap').should('not.have.descendants')
}

export const testMainError = () => {
  cy.getByTestId('spinner').should('exist')
  cy.getByTestId('main-error').should('not.exist')
}

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`)
}
