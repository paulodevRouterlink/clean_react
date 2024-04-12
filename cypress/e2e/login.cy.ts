describe('Login', () => {
  it('Should load with correct with state', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h2').contains('Login')
    cy.get('button').contains('Entrar')
  })
})
