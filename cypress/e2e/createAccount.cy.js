describe('Cadastro de Usuário', () => {
    beforeEach(() => {
        // Gera um usuário falso para cada teste
        cy.generateFakeUser().then(fakeUser => {
            cy.wrap(fakeUser).as("fakeUser")
        })
    })

    it('Cadastro com email e senha válidos', function () {
        const fakeUser = this.fakeUser;
        cy.visit('/')

        //clica no botao de cadastrar usuario
        cy.get("a[href='/register']").click()

        //Inseri nome
        cy.get('input[type="text"]')
            .type(fakeUser.name)
            .should('have.value', fakeUser.name);

        //Email
        cy.get('input[type="email"]')
            .type(fakeUser.email)
            .should('have.value', fakeUser.email);

        //Senha
        cy.get('input[name="password"]')
            .type(fakeUser.password)
            .should('have.value', fakeUser.password);

        //Confirma senha
        cy.get('input[name="confirmPassword"]')
            .type(fakeUser.password)
            .should('have.value', fakeUser.password);

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click();

        //Valida mensagem de cadastro com sucesso.
        cy.contains('Sucesso ao cadastrar usuario redirecionando...')
            .should("be.visible");

        //Aguarda o redirecionamento e verifica a URL
        cy.url().should('include', '/login');

        //Verifica se realmente esta na pagina de login
        cy.contains("h2", "Login")
            .should("be.visible");
    })

    it('Tentativa de cadastro com email já registrado', function () {
        const fakeUser = this.fakeUser;
        cy.visit('/')

        //clica no botao de cadastrar usuario
        cy.get("a[href='/register']").click()

        //Inseri nome
        cy.get('input[type="text"]')
            .should("be.visible")
            .type(fakeUser.name);

        //Email
        cy.get('input[type="email"]')
            .type(fakeUser.email);

        //Senha
        cy.get('input[name="password"]')
            .type(fakeUser.password)

        //Confirma senha
        cy.get('input[name="confirmPassword"]')
            .type(fakeUser.password)

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click()

        //Valida mensagem de cadastro com sucesso.
        cy.contains('Sucesso ao cadastrar usuario redirecionando...')
            .should("be.visible");

        //Aguarda o redirecionamento e verifica a URL
        cy.url().should('include', '/login');

        //Clica novamente para cadastrar
        cy.get("a[href='/register']").click()

        //Inseri nome
        cy.get('input[type="text"]')
            .should("be.visible")
            .type(fakeUser.name);

        //Email
        cy.get('input[type="email"]')
            .type(fakeUser.email);

        //Senha
        cy.get('input[name="password"]')
            .type(fakeUser.password)

        //Confirma senha
        cy.get('input[name="confirmPassword"]')
            .type(fakeUser.password)

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click();

        //Valida mensagem de e-mail em uso.
        cy.contains("div", "E-mail já está em uso!")
            .should("be.visible");

    })

    it('Tentativa de cadastro com email inválido', function () {
        const fakeUser = this.fakeUser;
        cy.visit('/')

        //clica no botao de cadastrar usuario
        cy.get("a[href='/register']").click();

        //Inseri nome
        cy.get('input[type="text"]')
            .should("be.visible")
            .type(fakeUser.name);

        //Email
        cy.get('input[type="email"]')
            .type("emailnmaovalido");

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click();

        //Valida mensagem do tooltip
        cy.get('input[type="email"]').then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail.');
        });
    })

    it('Tentativa de cadastro com senha menor que 6 caracteres', function () {
        const fakeUser = this.fakeUser;
        cy.visit('/')

        //clica no botao de cadastrar usuario
        cy.get("a[href='/register']").click();

        //Inseri nome
        cy.get('input[type="text"]')
            .should("be.visible")
            .type(fakeUser.name);

        //Email
        cy.get('input[type="email"]')
            .type(fakeUser.email);

        //Senha
        cy.get('input[name="password"]')
            .type("ab32");

        //Confirma senha
        cy.get('input[name="confirmPassword"]')
            .type("ab32");

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click();

        //Valida mensagem de senha
        cy.contains("p", "A senha deve ter pelo menos 6 caracteres")
            .should("be.visible");

    })

    it('Tentativa de cadastro sem preencher campos obrigatórios', function () {
        const fakeUser = this.fakeUser;
        cy.visit('/')

        //clica no botao de cadastrar usuario
        cy.get("a[href='/register']").click();

        //Inseri nome
        cy.get('input[type="text"]')
            .should("be.visible")
            .type(fakeUser.name);

        //Clica em cadastrar
        cy.get('button[type="submit"]')
            .click();

        //Valida mensagem de email obrigatorio
        cy.contains("p", "O email é obrigatório")
            .should("be.visible");

        //Valida mensagem de senha tenha 6 digitos
        cy.contains("p", "A senha deve ter pelo menos 6 caracteres")
            .should("be.visible");

        //Valida mensagem de confirmar a senha
        cy.contains("p", "Confirme a senha")
            .should("be.visible");
    })
})