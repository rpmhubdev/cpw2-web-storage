describe('Tester', () => {
  it('Checking page elements', function() {
      cy.visit('http://localhost:8080/index.html');
      cy.get('#text');
      cy.get('#color');
      cy.get('#font').select('Monaco');
  });
})