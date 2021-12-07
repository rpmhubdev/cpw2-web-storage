describe('Exercise tester', () => {
  it('Checking page elements', function() {
      cy.visit('http://localhost/index.html');
      cy.get('#text');
      cy.get('#color');
      cy.get('#font').select('Monaco');
  });
})