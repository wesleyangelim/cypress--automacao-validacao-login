import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let dadosUsuario;

// Carregar fixtures antes dos testes
before(() => {
  cy.fixture('usuarios').then((dados) => {
    dadosUsuario = dados;
  });
});

// GIVEN - Contexto inicial
Given('que estou na página de login', () => {
  cy.limparSessao();
  cy.acessarPaginaLogin();
});

// WHEN - Ações do usuário
When('eu preencho o email com credenciais válidas', () => {
  cy.get('[data-qa="login-email"]').clear().type(dadosUsuario.loginValido.email);
});

When('eu preencho a senha com credenciais válidas', () => {
  cy.get('[data-qa="login-password"]').clear().type(dadosUsuario.loginValido.password);
});

When('eu preencho o email com um email não cadastrado', () => {
  cy.get('[data-qa="login-email"]').clear().type(dadosUsuario.loginInvalido.emailInvalido);
});

When('eu preencho a senha com uma senha incorreta', () => {
  cy.get('[data-qa="login-password"]').clear().type(dadosUsuario.loginInvalido.senhaInvalida);
});

When('eu deixo o campo de email vazio', () => {
  cy.get('[data-qa="login-email"]').clear();
});

When('eu deixo o campo de senha vazio', () => {
  cy.get('[data-qa="login-password"]').clear();
});

When('eu preencho o email com {string}', (email) => {
  if (email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  } else {
    cy.get('[data-qa="login-email"]').clear();
  }
});

When('eu preencho a senha com {string}', (senha) => {
  if (senha) {
    cy.get('[data-qa="login-password"]').clear().type(senha);
  } else {
    cy.get('[data-qa="login-password"]').clear();
  }
});

When('eu clico no botão de login', () => {
  cy.get('[data-qa="login-button"]').click();
});

// THEN - Verificações
Then('eu devo ser redirecionado para a página inicial logado', () => {
  cy.url().should('eq', Cypress.config().baseUrl + '/');
});

Then('eu devo ver a mensagem de boas-vindas com meu nome de usuário', () => {
  cy.verificarUsuarioLogado(dadosUsuario.loginValido.username);
});

Then('eu devo ver uma mensagem de erro de login', () => {
  cy.get('p')
    .contains(dadosUsuario.loginInvalido.mensagemErro)
    .should('be.visible');
});

Then('eu devo permanecer na página de login', () => {
  cy.url().should('include', '/login');
});

//OS DOIS BLOCOS ABAIXO FORAM INCLUIDOS APOS OS ERROS DE EMAIL E SENHA INVALIDOS

Then('o campo de email deve estar inválido', () => {
  cy.get('[data-qa="login-email"]')
    .then(($el) => expect($el[0].checkValidity()).to.be.false);
});

Then('o campo de senha deve estar inválido', () => {
  cy.get('[data-qa="login-password"]')
    .then(($el) => expect($el[0].checkValidity()).to.be.false);
});
