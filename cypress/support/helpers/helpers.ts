const baseUrl: string = Cypress.config().baseUrl

export const testErrorWrap = () => {
  cy.getByTestId('error-wrap').should('not.have.descendants')
}

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`)
}
