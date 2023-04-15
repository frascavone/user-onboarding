/// <reference types="cypress" />

describe('contact-details', () => {
  it('validates input fields', () => {
    cy.visit('/user-onboarding-contact-details');

    // Fullname tests
    cy.get('input[name=fullName]').type('noasinajnc').blur();
    cy.get('[data-cy="error-fullName"]').should('not.be.empty');
    cy.get('input[name=fullName]').clear();

    cy.get('input[name=fullName]').type('AE^&^* CSCvfr433').blur();
    cy.get('[data-cy="error-fullName"]').should('not.be.empty');
    cy.get('input[name=fullName]').clear();

    cy.get('input[name=fullName]').type("Alessandro D'amico").blur();
    cy.get('[data-cy="error-fullName"]').should('not.exist');
    cy.get('input[name=fullName]').clear();

    cy.get('input[name=fullName]').type('Luca Di Montezemolo').blur();
    cy.get('[data-cy="error-fullName"]').should('not.exist');
    cy.get('input[name=fullName]').clear();

    cy.get('input[name=fullName]').type('Mario Rossi').blur();
    cy.get('[data-cy="error-fullName"]').should('not.exist');

    // Phone tests
    cy.get('input[name=phone]').type('2343421').blur();
    cy.get('[data-cy="error-phone"]').should('not.be.empty');
    cy.get('input[name=phone]').clear();

    cy.get('input[name=phone]').type('+39345123123466666666').blur();
    cy.get('[data-cy="error-phone"]').should('not.be.empty');
    cy.get('input[name=phone]').clear();

    cy.get('input[name=phone]').type('+393451231234').blur();
    cy.get('[data-cy="error-phone"]').should('not.exist');
    cy.get('input[name=phone]').clear();

    cy.get('select[name=phone]').select('🇮🇹️').blur();
    cy.get('input[name=phone]').type('3451231234').blur();
    cy.get('[data-cy="error-phone"]').should('not.exist');

    // Email tests
    cy.get('input[name=email]').type('testtest.com').blur();
    cy.get('[data-cy="error-email"]').should('not.be.empty');
    cy.get('input[name=email]').clear();

    cy.get('input[name=email]').type('test@test.').blur();
    cy.get('[data-cy="error-email"]').should('not.be.empty');
    cy.get('input[name=email]').clear();

    cy.get('input[name=email]').type('te.st@test.it').blur();
    cy.get('[data-cy="error-email"]').should('not.be.empty');
    cy.get('input[name=email]').clear();

    cy.get('input[name=email]').type('te.st@testit').blur();
    cy.get('[data-cy="error-email"]').should('not.be.empty');
    cy.get('input[name=email]').clear();

    cy.get('input[name=email]').type('te$%^&#st@test.it').blur();
    cy.get('[data-cy="error-email"]').should('not.be.empty');
    cy.get('input[name=email]').clear();

    cy.get('input[name=email]').type('test@test.it').blur();
    cy.get('[data-cy="error-email"]').should('not.exist');

    // Country tests
    cy.get('select[name=country]').select('').blur();
    cy.get('[data-cy="error-country"]').should('not.be.empty');

    cy.get('select[name=country]').select('Italy').blur();
    cy.get('[data-cy="error-country"]').should('not.exist');
  });
});
