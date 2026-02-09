// Comandos personalizados do Cypress

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-qa="login-email"]').clear().type(email);
  cy.get('[data-qa="login-password"]').clear().type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('verificarUsuarioLogado', (username) => {
  cy.get('a').contains('Logged in as').should('be.visible');
  cy.get('a').contains(username).should('be.visible');
});

Cypress.Commands.add('acessarPaginaLogin', () => {
  cy.visit('/');
  cy.get('a[href="/login"]').click();
  cy.url().should('include', '/login');
  cy.contains('Login to your account').should('be.visible');
});

Cypress.Commands.add('limparSessao', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
