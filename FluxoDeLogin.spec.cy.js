describe("Verificando a página de login", () => {
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
  it("Deixando os campos em branco e verificando mensagem de erro ao submeter o fomulário", () => {
    cy.get(".btn").click({ force: true });
    cy.get("ul > :nth-child(1)").contains("O campo Email é obrigatório");
    cy.get("ul > :nth-child(2)").contains("O campo Senha é obrigatório");
  });
  it("Preenchendo apenas campo de email e verificando mensagem de erro ao submeter o fomulário", () => {
    cy.get("#Email").type("teste.pe@outlook.com");
    cy.get(".btn").click({ force: true });
    cy.get(".text-danger").contains("O campo Senha é obrigatório");
  });
  it("Preenchendo apenas campo de senha e verificando mensagem de erro ao submeter o fomulário", () => {
    cy.get("#Password").type("123.123D");
    cy.get(".btn").click({ force: true });
    cy.get(".text-danger").contains("O campo Email é obrigatório");
  });
  it("Preenchendo campo de senha com conteúdo inválido e verificando mensagem de erro ao submeter o fomulário", () => {
    cy.get("#Email").type("teste.pe@outlook.com");
    cy.get("#Password").type("123.123DD");
    cy.get(".btn").click({ force: true });
    cy.get(".text-danger").contains("Tentativa de login inválida");
  });
  it("Preenchendo campo de email com conteúdo inválido e verificando mensagem de erro ao submeter o fomulário", () => {
    cy.get("#Email").type("teeeeste.pe@outlook.com");
    cy.get("#Password").type("123.123DD");
    cy.get(".btn").click({ force: true });
    cy.get(".text-danger").contains("Tentativa de login inválida");
  });
});
describe("Verificando funcionalidade 'Recuperação de Senha' através da página de login", () => {
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
  it("Inserindo email válido para recuperação e submetendo ao envio", () => {
    cy.get('[href="/esqueci-minha-senha"]').click();
    cy.url().should("eq", "https://www.agorabrasil.org.br/esqueci-minha-senha");
    cy.get("#Email").type("teste.pe@outlook.com", { force: true });
    cy.get("form > .btn").click({ force: true });
    cy.url().should(
      "eq",
      "https://www.agorabrasil.org.br/Account/ForgotPasswordConfirmation"
    );
  });

  it.only("Inserindo email com formato inválido para recuperação e submetendo ao envio", () => {
    cy.get('[href="/esqueci-minha-senha"]').click();
    cy.url().should("eq", "https://www.agorabrasil.org.br/esqueci-minha-senha");
    cy.get("#Email").type("a#blue.com", { force: true });
    cy.get("form > .btn").click({ force: true });
    cy.get('input[type="email"]').then((input) => {
      const validityMessage = input[0].validationMessage;
      expect(validityMessage).to.include(
        'Inclua um "@" no endereço de e-mail.'
      );
    });
  });
});
