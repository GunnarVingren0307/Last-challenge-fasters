describe("Verificando funcionalidade 'Trocar de senha' ", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/login");
  });
  it.only("Verificando a renovação de senha: inserindo senha atual, nova senha e confirmando a nova senha", () => {
    /*Bloco responsável por efetuar o login */
    cy.get("#Email").type("bla.bla.bla.oliveira@outlook.com");
    cy.get("#Password").type("123456.awsd@");
    cy.get(".btn").click({ force: true });
    /*--------------------------------------*/
    let senhaAtual = "123456.awsd@";
    let senhaNova = "1234567.awsd@";
    cy.get("#Gerenciarsenha").click({ force: true });
    cy.get("#OldPassword").type(senhaAtual);
    cy.get("#NewPassword").type(senhaNova);
    cy.get("#ConfirmPassword").type(senhaNova);
    cy.get(".form-panel > .btn").click({ force: true });
    cy.get(".alert").contains("Sua senha foi alterada com sucesso!");
  });
});
