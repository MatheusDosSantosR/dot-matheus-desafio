// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { fakerPT_BR as faker } from '@faker-js/faker';

Cypress.Commands.add('generateFakeUser', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        'name': `${firstName} ${lastName}`,
        'email': faker.internet.email({ firstName: firstName, lastName: lastName }),
        'password': faker.internet.password({ length: 10 }),
    }
})

Cypress.Commands.add('generateFakeTask', () => {
    return {
        'title': `${faker.lorem.words(3)}`,
        'description': `${faker.internet.url()}`
    }
})

//Envia requisição para cadastrar usuário pela API
Cypress.Commands.add('createUserApi', () => {
    cy.generateFakeUser().then(fakeUser => {
        const body = {
            "name": fakeUser.name,
            "email": fakeUser.email,
            "password": fakeUser.password,
            "confirmPassword": fakeUser.password
        };

        cy.request("POST", "/api/public/users", body).then(response => {
            //Validações retorno da API do cadastro do usuario
            expect(response.status, "Status code 201").to.eq(201);
            expect(response.body.msg, "Retorno mensagem de sucesso").to.be.eql("Sucesso ao cadastrar usuario");
            expect(response.body.data.id, "Retorno ID do usuário.").to.be.an("number");
            //Retorna os dados do usuário
            return body;
        })

        //Salva os dados do usuario no fixtures para reutilização nos demais testes.
        cy.writeFile('cypress/fixtures/createUserApi.json', body);
    })
})

//Realiza autenticação com session
Cypress.Commands.add('login', (email, password, name) => {
    cy.session([email, password], () => {
        cy.intercept("GET", "api/todos").as("getTodos")
        cy.visit('/login');
        cy.get('[data-cy="email-input"]').type(email)
        cy.get('[data-cy="password-input"]').type(password)
        cy.get('[data-cy="submit-button"]').click();
        cy.url().should('include', '/dashboard');

        //Aguarda carregar a dashboard
        cy.wait("@getTodos");
        
        cy.get('[data-cy="name-user-span"]')
            .should("be.visible")
            .should("have.text", name);
    })
})