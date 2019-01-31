describe('My First Test', function() {
  it('Visit the kitchen sink', function() {
  	cy.visit(Cypress.config('baseUrl')).screenshot()
  	cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1) > ul > li:nth-child(1) > a').contains('get')
  })	
  it('finds the content type', function() {
    cy.visit(Cypress.config('baseUrl'))
    cy.contains('type')
    cy.screenshot()
  })
  it('clicks the link "type"', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include','/commands/actions')
  })
  it('gets, types and asserts', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include','/commands/actions')
    cy.get('.action-email').screenshot()
      .type('fake@email.com') // type in the value in the input type with class="action-mail"
      .should('have.value','fake@email.com').screenshot() // expected to have in input value
    //cy.screenshot()
  })
})