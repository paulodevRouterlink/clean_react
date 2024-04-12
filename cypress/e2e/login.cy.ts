describe('Login', () => {
  beforeEach(() => {
    cy.visit('signin')
  })

  it('Should load with correct with state', () => {
    cy.getByTestId('email-status').should(
      'have.attr',
      'title',
      'Campo Obrigatório',
    )
  })
})
