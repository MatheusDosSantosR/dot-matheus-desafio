describe('Login de Usuário', () => {
    before(() => {
        //Cadastra usuário e salva os dados no fixture.
        cy.createUserApi()
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('Login com credenciais corretas', () => {
        cy.fixture("createUserApi.json").then(user => {
            //Email
            cy.get('[data-cy="email-input"]')
                .type(user.email)
                .should('have.value', user.email);

            //Senha
            cy.get('[data-cy="password-input"]')
                .type(user.password)
                .should('have.value', user.password);

            //Clica para realizar login
            cy.get('[data-cy="submit-button"]')
                .should("be.visible")
                .click();

            //Valida URL e Nome na dashboard
            cy.url().should('include', '/dashboard');
            cy.get('[data-cy="name-user-span"]')
                .should("be.visible")
                .should("have.text", user.name)
        })
    })

    it('Tentativa de login com senha incorreta', () => {
        cy.fixture("createUserApi.json").then((user) => {
            const failPassword = "senhaInvalida123";
            //Email
            cy.get('[data-cy="email-input"]')
                .type(user.email)
                .should('have.value', user.email);

            //Senha
            cy.get('[data-cy="password-input"]')
                .type(failPassword)
                .should('have.value', failPassword);

            //Clica para realizar login
            cy.get('[data-cy="submit-button"]')
                .should("be.visible")
                .click();

            //Valida mensagem
            cy.contains("Senha inválida!")
                .should("be.visible");
        })
    })
    it('Tentativa de login com email não cadastrado', () => {
        const email = "emailNaoExiste@invalido.com";
        const password = "senhaAqui";

        //Email
        cy.get('[data-cy="email-input"]')
            .type(email)
            .should('have.value', email);

        //Senha
        cy.get('[data-cy="password-input"]')
            .type(password)
            .should('have.value', password);

        //Clica para realizar login
        cy.get('[data-cy="submit-button"]')
            .should("be.visible")
            .click();

        //Valida mensagem
        cy.contains("Credenciais inválidas !")
            .should("be.visible");
    })
    it('Tentativa de login com senha menor que 6 caracteres', () => {
        cy.fixture("createUserApi.json").then((user) => {
            const failPassword = "123";
            //Email
            cy.get('[data-cy="email-input"]')
                .type(user.email)
                .should('have.value', user.email);

            //Senha
            cy.get('[data-cy="password-input"]')
                .type(failPassword)
                .should('have.value', failPassword);

            //Clica para realizar login
            cy.get('[data-cy="submit-button"]')
                .should("be.visible")
                .click();

            //Valida mensagem
            cy.contains("Senha inválida!")
                .should("be.visible");
        })
    })
    it('Tentativa de login com campos obrigatórios vazios', () => {
        //Clica para realizar login
        cy.get('[data-cy="submit-button"]')
            .should("be.visible")
            .click();

        //Valida mensagem E-mail
        cy.contains("O email é obrigatório")
            .should("be.visible");

        //Valida mensagem senha
        cy.contains("A senha deve ter pelo menos 6 caracteres")
            .should("be.visible");
    })
    it.only('Teste de logout', () => {
        //Reliza login normalmente
        cy.fixture("createUserApi.json").then(user => {
            //Email
            cy.get('[data-cy="email-input"]')
                .type(user.email)
                .should('have.value', user.email);

            //Senha
            cy.get('[data-cy="password-input"]')
                .type(user.password)
                .should('have.value', user.password);

            //Clica para realizar login
            cy.get('[data-cy="submit-button"]')
                .should("be.visible")
                .click();

            //Valida URL e Nome na dashboard
            cy.url().should('include', '/dashboard');
            cy.get('[data-cy="name-user-span"]')
                .should("be.visible")
                .should("have.text", user.name);

            //Clica para realizar logout
            cy.get('[data-cy="logout-button"]')
                .click();

            //Valida se voltou para tela de login
            cy.url().should('include', '/login');
            cy.get('[data-cy="email-input"]')
                .should("be.visible");
        })
    })
})