export const testInputStatus = (field: string, value: string, text: string) => {
  cy.getByTestId(`${field}-status`)
    .should('have.attr', 'title', value)
    .should('contain.text', text)
}

export const testMainError = () => {
  cy.getByTestId('spinner').should('exist')
  cy.getByTestId('main-error').should('not.exist')
}
