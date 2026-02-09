# language: pt
Funcionalidade: Login no Automation Exercise
  Como um usuário do sistema
  Eu quero realizar login na plataforma
  Para acessar minha conta

  Contexto:
    Dado que estou na página de login

  @login @positivo
  Cenário: Login com credenciais válidas
    Quando eu preencho o email com credenciais válidas
    E eu preencho a senha com credenciais válidas
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página inicial logado
    E eu devo ver a mensagem de boas-vindas com meu nome de usuário

  @login @negativo
  Cenário: Login com email inválido
    Quando eu preencho o email com um email não cadastrado
    E eu preencho a senha com credenciais válidas
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro de login
    E eu devo permanecer na página de login

  @login @negativo
  Cenário: Login com senha inválida
    Quando eu preencho o email com credenciais válidas
    E eu preencho a senha com uma senha incorreta
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro de login
    E eu devo permanecer na página de login

  # @login @negativo
  # Cenário: Login com email e senha vazios
  #   Quando eu deixo o campo de email vazio
  #   E eu deixo o campo de senha vazio
  #   E eu clico no botão de login
  #   Então eu devo ver uma mensagem de erro de login
    @login @negativo
  Cenário: Login com email e senha vazios
    Quando eu deixo o campo de email vazio
    E eu deixo o campo de senha vazio
    E eu clico no botão de login
    Então o campo de email deve estar inválido
    E o campo de senha deve estar inválido


  # @login @negativo
  # Esquema do Cenário: Login com diferentes combinações inválidas
  #   Quando eu preencho o email com "<email>"
  #   E eu preencho a senha com "<senha>"
  #   E eu clico no botão de login
  #   Então eu devo ver uma mensagem de erro de login

  #   Exemplos:
  #     | email                      | senha         |
  #     | invalido@example.com       | Senha123!     |
  #     | testeautomacao@example.com | senhaerrada   |
  #     | emailinvalido              | Senha123!     |
  #     |                            | Senha123!     |
  #     | testeautomacao@example.com |               |

  @login @negativo
  Esquema do Cenário: Login com credenciais inválidas
    Quando eu preencho o email com "<email>"
    E eu preencho a senha com "<senha>"
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro de login
    E eu devo permanecer na página de login

    Exemplos:
      | email                | senha       |
      | invalido@example.com | Senha123!   |
      | testeautomacao@example.com | senhaerrada |


  @login @negativo
  Esquema do Cenário: Login com email inválido no formato
    Quando eu preencho o email com "<email>"
    E eu preencho a senha com "<senha>"
    E eu clico no botão de login
    Então o campo de email deve estar inválido

    Exemplos:
      | email         | senha     |
      | emailinvalido | Senha123! |
      |               | Senha123! |

