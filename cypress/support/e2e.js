// Importar comandos personalizados
import './commands';

// Configuração global
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para prevenir que o Cypress falhe o teste
  // em caso de exceções não capturadas
  return false;
});
