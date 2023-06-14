describe("Teste dos menus na página principal do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO SOBRE NÓS-------------------------------------------------
describe("Teste dos menus na página sobre nós do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/sobre-nos");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO CANDIDATOS-------------------------------------------------
describe("Teste dos menus na página candidatos do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/candidatos");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO EMPRESAS-------------------------------------------------
describe("Teste dos menus na página empresas do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/empresas");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO NOVIDADES-------------------------------------------------
describe("Teste dos menus na página novidades do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/novidades");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO BIBLIOTECA-------------------------------------------------
describe("Teste dos menus na página biblioteca do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/Home/Library");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
//
//
//
//
//--------------------------TESTANDO TODOS OS MENUS NA PÁGINA DO CONTATO-------------------------------------------------
describe("Teste dos menus na página contato do ÁgoraFoal", () => {
  //Bloco de comando que define o que vai acontecer antes de cada teste
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/contato");
  });
  //------------------------------TESTANDO O MENU SUPERIOR---------------------------
  it("Verifica se ao clicar no logo vai retornar ao início no menu principal", () => {
    cy.get('.navbar-brand > [src="/imgs/agora-logo-branco.png"]').click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção início no menu principal abre no local corretamente", () => {
    cy.get("#inicio > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu principal abre no local corretamente", () => {
    cy.get("#sobre > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu principal abre no local corretamente", () => {
    cy.get("#candidatos > .nav-link").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu principal abre no local corretamente", () => {
    cy.get("#empresas > .nav-link").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu principal abre no local corretamente", () => {
    cy.get("#novidades > .nav-link").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu principal abre no local corretamente", () => {
    cy.get("#biblioteca > .nav-link").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu principal abre no local corretamente", () => {
    cy.get("#contato > .nav-link").click({ force: true });
    cy.get("h1").contains("Contato");
  });
  //------------------------------TESTANDO O MENU INFERIOR---------------------------
  it("Verifica se ao clicar no logo no menu INFERIOR vai retornar ao início", () => {
    cy.get(".col-md-4>a>img").click({
      force: true,
    });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção Home no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(1)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/");
  });
  it("Verifica se a opção sobre nós no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(2)>a").click({ force: true });
    cy.get(".title-highlight").contains("Sobre nós");
  });
  it("Verifica se a opção candidatos no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(3)>a").click({ force: true });
    cy.get("h1").contains("Depoimentos");
  });
  it("Verifica se a opção empresas no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(4)>a").click({ force: true });
    cy.url().should("eq", "https://www.agorabrasil.org.br/empresas");
  });
  it("Verifica se a opção novidades no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(5)>a").click({ force: true });
    cy.get(".title-highlight").contains("Novidades");
  });
  it("Verifica se a opção biblioteca no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(6)>a").click({ force: true });
    cy.get(".text-center").contains("Biblioteca");
  });
  it("Verifica se a opção contato no menu INFERIOR abre no local corretamente", () => {
    cy.get(".col-md-8>ul>:nth-child(7)>a").click({ force: true });
    cy.get("h1").contains("Contato");
  });
});
