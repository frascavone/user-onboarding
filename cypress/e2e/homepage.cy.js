/// <reference types="cypress" />

describe('user-onboarding', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('homepage links to user-onboarding', () => {
    cy.get('a')
      .should('to.have.attr', 'href', '/user-onboarding-contact-details')
      .click();
  });
});
