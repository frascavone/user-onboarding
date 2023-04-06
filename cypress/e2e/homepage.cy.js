/// <reference types="cypress" />

describe('user-onboarding', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('homepage links to user-onboarding', () => {
    cy.get('a')
      .should('to.have.attr', 'href', '/user-onboarding-contact-details')
      .click();
  });
});
