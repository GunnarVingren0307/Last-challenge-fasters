import "cypress-xpath";
//por conta de uma tentativa e um sucessor erro entre as linhas 77 e 78, resolvi optar pelo xpath. Por isso instale
//a lib cypress-xpath pelo comando ao lado: npm install -D cypress-xpath
describe("Preenchendo as 'Estapas' com informações válidas após efetuar o login", () => {
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

  it("Inserindo as informações na aba de 'Meu Cadastro' e submetendo os Formulários", () => {
    /*----------------------1° preenchimento das etapas('Dados pessoais')------------------------------*/
    /*
        Bloco com três gets responsáveis por mapear os campos onde serão inseridos os valores de login e preencher estes
        campos com os dados de entrada válidos
    */
    cy.get("#Email").type("bla.bla.bla.oliveira@outlook.com");
    cy.get("#Password").type("123456.awsd@");
    cy.get(".btn").click({ force: true });
    //selecionando por segurança a página 'Meu Cadastro'
    cy.get("#Meucadastro").click();
    cy.get("ul > :nth-child(1) > .row").click();
    /*preenchando os dados pessoais*/
    // limpa e insere nome
    cy.get("#StepForm1_Name").clear();
    cy.get("#StepForm1_Name").type("Teste Cumpade da Silva");
    // limpa e insere CPF
    cy.get("#StepForm1_CPF").clear();
    cy.get("#StepForm1_CPF").type("65127171040"); ///CPF GERADO PELO 4devs
    cy.get("#StepForm1_Genre").select("Masculino");
    // limpa e insere Numero de Telefone
    cy.get("#StepForm1_Phone").clear();
    cy.get("#StepForm1_Phone").type("81984121307");
    // limpa e insere Data de aniversário
    cy.get("#StepForm1_BirthDay").clear();
    cy.get("#StepForm1_BirthDay").type("30122002");
    cy.get("#info-basicas > .btn").click({ force: true });

    /*----------------------2° preenchimento das etapas('Endereço')------------------------------*/
    cy.get("#Meucadastro").click();
    cy.get("ul > :nth-child(2) > .row").click();
    cy.get("#postal").clear();
    cy.get("#postal").type("54160454");
    cy.get(".form-panel > :nth-child(4)").click({ force: true });
    cy.get("#StepForm2_Address_Number").clear();
    cy.get("#StepForm2_Address_Number").type("209");
    cy.get("#StepForm2_Address_Complement").clear();
    cy.get("#StepForm2_Address_Complement").type("Apt 102 / bloco 05");
    cy.get("#StepForm2_Address_WorkOutside").check();
    cy.get(".form-panel > .btn").click({ force: true });

    /*----------------------3° preenchimento das etapas('Deficiência')------------------------------*/
    cy.get("#Meucadastro").click();
    cy.get("ul > :nth-child(3) > .row").click();
    cy.get("#StepForm3_Disability").check();
    cy.get("#StepForm3_Disabilities_HasHearingDeficiency").check();
    cy.get("#StepForm3_Disabilities_HearingDeficiency").select("Moderado");
    cy.get("#StepForm3_HasMedicalReport").check();
    cy.get("#StepForm3_CID").clear();
    cy.get("#StepForm3_CID").type("CID 10");

    cy.get("#StepForm3_HasAssistiveTechnology").check();
    cy.get("#StepForm3_AssistiveTechnologies").clear();
    cy.get("#StepForm3_AssistiveTechnologies").type("NVDA");
    cy.get(":nth-child(6) > .btn").click({ force: true });

    /*----------------------4° preenchimento das etapas('Competência')------------------------------*/
    cy.get("#Meucadastro").click();
    cy.get("ul > :nth-child(4) > .row").click();
    cy.get("#StepForm4_SchoolLevel").select("Superior");
    /* caso seja a primeira vez logando: incremente este código nas linhas logo abaixo abaixo e retire
    na próxima execução:
        cy.xpath('//*[contains(@id, "AddForm")]').click({ force: true });
        cy.get("#StepForm4_Educations_0__Type").select("Técnico");
        cy.get("#StepForm4_Educations_0__Area").clear();
        cy.get("#StepForm4_Educations_0__Area").type("Edificações");
        cy.get("#StepForm4_Educations_0__Institution").clear();
        cy.get("#StepForm4_Educations_0__Institution").type("Senai");
        cy.get("#StepForm4_Educations_0__Year").clear();
        cy.get("#StepForm4_Educations_0__Year").type("2023");
*/
    cy.get("#Office").check();
    cy.get("#StepForm4_OfficeArray_0__IsChecked").check();
    cy.get("#StepForm4_OfficeArray_1__IsChecked").check();
    cy.get("#StepForm4_OfficeArray_2__IsChecked").check();
    cy.get("#StepForm4_OfficeArray_3__IsChecked").check();
    cy.get("#MidiaEditors").check();
    cy.get("#StepForm4_MediaEditorsArray_0__IsChecked").check();
    cy.get("#StepForm4_MediaEditorsArray_1__IsChecked").check();
    cy.get("#StepForm4_MediaEditorsArray_2__IsChecked").check();
    cy.get("#StepForm4_MediaEditorsArray_3__IsChecked").check();
    cy.get("#Programming").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_0__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_1__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_2__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_3__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_4__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_5__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_6__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_7__IsChecked").check();
    cy.get("#StepForm4_ProgramingLanguagesArray_8__IsChecked").check();

    cy.get("#Languages").check();
    cy.get("#StepForm4_Others").clear();
    cy.get("#StepForm4_Others").type("Ando de bicicleta");
    cy.get("#StepForm4_ObjectivesArray_39__IsChecked").check();
    cy.get("#StepForm4_ObjectivesArray_40__IsChecked").check();
    cy.get(":nth-child(7) > .btn").click({ force: true });

    /*----------------------5° preenchimento das etapas('Experiência')------------------------------*/
    cy.get("#Meucadastro").click();
    cy.get("ul > :nth-child(5) > .row").click({ force: true });
    cy.get("#StepForm5_Abilities").clear();
    cy.get("#StepForm5_Abilities").type("Esforçado, trabalhador, legal");
    cy.get("#StepForm5_HasProfessionalExperience").check();
    cy.get("#StepForm5_AdditionalInformation").clear();
    cy.get("#StepForm5_AdditionalInformation").type(
      "Informações relevantes. a humildade vem antes da honra"
    );
    cy.get("#StepForm5_InterviewByStaff").check();
    cy.get("#StepForm5_Origin").clear();
    cy.get("#StepForm5_Origin").type("outro");
    cy.get(":nth-child(6) > .btn").click();

    /*Verificando se ocorreu o cadastro*/
    cy.get(".alert-info").contains(
      "Parabéns! Seu cadastro foi concluído! Veja as vagas que estão disponíveis pra voce!"
    );
  });
});
