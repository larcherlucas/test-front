describe('Form Validation Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); 
    });
  
    it('should show a green check for valid email', () => {
      cy.get('input#email').type('test@example.com');
      cy.get('span.success-check').should('be.visible');
      cy.get('span.error-check').should('not.exist');
    });
  
    it('should show a red cross for invalid email', () => {
      cy.get('input#email').type('invalid-email');
      cy.get('span.error-check').should('be.visible');
      cy.get('span.success-check').should('not.exist');
    });
  
    it('should show a green check for valid phone number', () => {
      cy.get('input#phone').type('1234567890');
      cy.get('span.success-check').should('be.visible');
      cy.get('span.error-check').should('not.exist');
    });
  
    it('should show a red cross for invalid phone number', () => {
      cy.get('input#phone').type('1234');
      cy.get('span.error-check').should('be.visible');
      cy.get('span.success-check').should('not.exist');
    });
  
    it('should show a green check for valid postal code', () => {
      cy.get('input#postalCode').type('12345');
      cy.get('span.success-check').should('be.visible');
      cy.get('span.error-check').should('not.exist');
    });
  
    it('should show a red cross for invalid postal code', () => {
      cy.get('input#postalCode').type('1234');
      cy.get('span.error-check').should('be.visible');
      cy.get('span.success-check').should('not.exist');
    });
  
    it('should not show validation icons for name field', () => {
      cy.get('input#name').type('John Doe');
      cy.get('span.success-check').should('not.exist');
      cy.get('span.error-check').should('not.exist');
    });
  
    it('should not show validation icons for address field', () => {
      cy.get('textarea#address').type('123 Main St');
      cy.get('span.success-check').should('not.exist');
      cy.get('span.error-check').should('not.exist');
    });
  });
  