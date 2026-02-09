# Automação de Testes - Cypress + Cucumber (Login)

Projeto de automação E2E com **Cypress + Cucumber (Gherkin)** para validação de login no site [Automation Exercise](<https://www.automationexercise.com>).
O foco é demonstrar cenários positivos e negativos, além de boas práticas de organização de testes.

---

## Objetivo

Validar o fluxo de login do usuário, cobrindo:

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de campos obrigatórios (HTML5)
- Cenários com dados parametrizados (Scenario Outline)

---

## Tecnologias Utilizadas

- **Cypress** (E2E Testing)
- **JavaScript**
- **Cucumber / Gherkin**
- **@badeball/cypress-cucumber-preprocessor**
- **@bahmutov/cypress-esbuild-preprocessor**

---

## Estrutura do Projeto
```

cypress-automacao-validacao-login/
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Cenários Gherkin (.feature)
│   │   │   └── login.feature
│   │   └── step_definitions/  # Implementação dos steps
│   │       └── login.steps.js
│   ├── fixtures/              # Dados de teste
│   │   └── usuarios.json
│   ├── support/               # Comandos customizados e config global
│   │   ├── commands.js
│   │   └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

```

---

## Pré-requisitos

- Node.js
- npm
- Conta criada no site [Automation Exercise](<https://www.automationexercise.com>)

---

## Instalação

```bash
npm install
```

---

## Executar Testes

### Modo interativo (Cypress UI)

```bash
npm run cypress:open
```

### Modo headless (terminal)

```bash
npm test
```

---

## Dados de Teste

Os dados estão em `cypress/fixtures/usuarios.json`:

```json
{
  "loginValido": {
    "email": "seu-email@example.com",
    "password": "sua-senha",
    "username": "Seu Nome"
  },
  "loginInvalido": {
    "emailInvalido": "emailinvalido@example.com",
    "senhaInvalida": "senhaerrada123",
    "mensagemErro": "Your email or password is incorrect!"
  }
}
```

⚠️ Atualize `loginValido` com suas credenciais reais do site para o cenário positivo funcionar.

---

## Cenários Cobertos

- Login com credenciais válidas
- Email inválido (formato)
- Senha inválida
- Email e senha vazios
- Combinações inválidas com `Scenario Outline`

---

## Observação Importante (HTML5 Validation)

Alguns cenários de erro **não retornam mensagem do sistema** porque o navegador bloqueia o envio (validação nativa HTML5).

Por isso, nos casos de email/senha vazios ou email com formato inválido, o teste valida:

```js
checkValidity() === false
```

Isso garante que o input está inválido e o submit foi bloqueado antes de chegar no backend.

---

## Comandos Customizados

Local: `cypress/support/commands.js`

- `cy.login(email, password)`
- `cy.verificarUsuarioLogado(username)`
- `cy.acessarPaginaLogin()`
- `cy.limparSessao()`

---

## Tags

Os cenários usam tags para organização:

- `@login`
- `@positivo`
- `@negativo`

---

## Lições Importantes Aplicadas

- Separação entre **feature (negócio)** e **steps (técnico)**
- Reuso de steps com parâmetros (`{string}`)
- Ajuste de testes para refletir o comportamento real do browser
- Uso de fixtures para dados reutilizáveis

