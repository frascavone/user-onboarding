/// <reference types="cypress" />

describe('user-journey', () => {
  it('checks link to homepage', () => {
    cy.visit('/user-onboarding-contact-details');
    cy.get('a[data-cy=backToHome]').click();
    cy.url().should('equal', 'http://localhost:5173/');
  });

  it('checks UX', () => {
    cy.visit('/user-onboarding-contact-details');

    cy.get('input[name=fullName]').type('Mario Rossi').blur();
    cy.get('[data-cy="error-fullName"]').should('not.exist');

    cy.get('select[name=phone]').select('🇮🇹️');
    cy.get('input[name=phone]').type('3451231234').blur();
    cy.get('[data-cy="error-phone"]').should('not.exist');

    cy.get('input[name=email]').type('test@test.it').blur();
    cy.get('[data-cy="error-email"]').should('not.exist');

    cy.get('select[name=country]').select('Italy').blur();
    cy.get('[data-cy="error-country"]').should('not.exist');

    cy.get('button.next').click();

    // STEP 2 /////////////////////////
    cy.url().should('include', '/user-onboarding-investment-plans');
    cy.get('.progress > :nth-child(2)').should('have.class', 'active');
    cy.get('.step').should('have.text', 'STEP 2 OF 3');

    cy.get('.slider__labels > [value="20000"]').click();
    cy.get('.slider__labels > [value="200000"]').click();

    cy.get('label[for=isInvestor]').click();

    cy.get('button.next').click();

    // STEP 3 /////////////////////////
    cy.url().should('include', '/user-onboarding-investment-preferences');
    cy.get('.progress > :nth-child(2)').should('have.class', 'active');
    cy.get('.progress > :nth-child(3)').should('have.class', 'active');
    cy.get('.step').should('have.text', 'STEP 3 OF 3');

    cy.get('label[for=singleFamily]').click();
    cy.get('label[for=commercialRetail]').click();
    cy.get('label[for=commercialWarehousing]').click();

    cy.get('button.next').click();
  });
});
