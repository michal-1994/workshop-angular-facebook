describe('General', () => {
  it('is project name visible', () => {
    cy.visit('/')
    cy.contains('Facebook')
  })
})
