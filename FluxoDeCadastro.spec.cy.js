describe("Verificando a página de Cadastro", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/cadastrar-se");
  });
  it("Inserindo informações válidas(Login + Senha), submetendo o formulário e verificando se o usuário consegue logar corretamente", () => {
    /*
      Bloco com três gets responsáveis por mapear os campos onde serão inseridos os valores de login e preencher estes
      campos com os dados de entrada válidos
    */
    cy.get("#Email").type("teste.pe@outlook.com");
    cy.get("#Password").type("123.123D");
    cy.get(".btn").click({ force: true });
    //
    /*após preencher com as informações necessárias para o Login
    e clicar no botão de submit esta asserção verifica se ocorreu o envio correto
    atráves do endereço que o usuário deve ser mandado após concluir o cadastro.*/
    //
    cy.url().should("eq", "https://www.agorabrasil.org.br/Secure/Jobs");
  });
});
