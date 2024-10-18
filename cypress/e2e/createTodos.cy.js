describe('Criar uma Tarefa', () => {
    before(() => {
        //Cadastra usuário e salva os dados no fixture.
        cy.createUserApi()
    })

    beforeEach(() => {
        //Obtem dados do usuario para realizar login
        cy.fixture("createUserApi.json").then(user => {
            cy.login(user.email, user.password, user.name)
            cy.visit("/dashboard");
        })

        //Gera dados para criação da tarefa
        cy.generateFakeTask().then(dataTask => {
            cy.wrap(dataTask).as("dataTask");
        })
    })

    it('Criação de tarefa com todos os campos preenchidos', function () {
        const dataTask = this.dataTask;
        //Acessa pagina de tarefas
        cy.get('[data-cy="todos-link"]')
            .click();

        //Clica no botão para cadastrar tarefa
        cy.get('[data-cy="create-todo-button"]')
            .click();

        //Preenche titulo
        cy.get('[data-cy="title-input"]')
            .type(dataTask.title);

        //Preencher descrição
        cy.get('[data-cy="description-input"] .ql-editor')
            .type(dataTask.description);

        //Selecionar priopridade
        cy.get(':nth-child(3) > [data-cy="priority-select"]')
            .select("Alta");

        cy.intercept("POST", "api/todos/").as("createTodo");

        //Clica em salvar
        cy.get('[data-cy="submit-button"]')
            .click();

        //Verifica na lista de existe a tarefa
        cy.wait("@createTodo").then(req => {
            const response = req.response.body;
            cy.get(`[data-cy="todo-card-${response.data.id}"]`)
                .should("be.visible");
        })
    })

    it('Criação de tarefa com campo de descrição vazio', function () {
        const dataTask = this.dataTask;
        //Acessa pagina de tarefas
        cy.get('[data-cy="todos-link"]')
            .click();

        //Clica no botão para cadastrar tarefa
        cy.get('[data-cy="create-todo-button"]')
            .click();

        //Preenche titulo
        cy.get('[data-cy="title-input"]')
            .type(dataTask.title);

        //Selecionar priopridade
        cy.get(':nth-child(3) > [data-cy="priority-select"]')
            .select("Alta");

        cy.intercept("POST", "api/todos/").as("createTodo");

        //Clica em salvar
        cy.get('[data-cy="submit-button"]')
            .click();

        //Verifica na lista de existe a tarefa
        cy.wait("@createTodo").then(req => {
            const response = req.response.body;
            cy.get(`[data-cy="todo-card-${response.data.id}"]`)
                .should("be.visible");
        })
    })

    it('Tentativa de criação tarefa com o campo de título vazio', function () {
        const dataTask = this.dataTask;

        //Acessa pagina de tarefas
        cy.get('[data-cy="todos-link"]')
            .click();

        //Clica no botão para cadastrar tarefa
        cy.get('[data-cy="create-todo-button"]')
            .click();

        //Preencher descrição
        cy.get('[data-cy="description-input"] .ql-editor')
            .type(dataTask.description);

        //Selecionar priopridade
        cy.get(':nth-child(3) > [data-cy="priority-select"]')
            .select("Alta");

        cy.intercept("POST", "api/todos/").as("createTodo");

        //Clica em salvar
        cy.get('[data-cy="submit-button"]')
            .click();

        //Verifica se mensagem
        cy.contains("p", "O título é obrigatório")
            .should("be.visible");
    })

    it('Teste de cancelamento da criação de uma nova tarefa', function () {
        //Acessa pagina de tarefas
        cy.get('[data-cy="todos-link"]')
            .click();

        //Clica no botão para cadastrar tarefa
        cy.get('[data-cy="create-todo-button"]')
            .click();

        //Clica no botão de cancelar

        cy.get('[data-cy="close-button"]')
            .click();

        //Modal não deve estar aberto
        cy.contains("h2", "Minhas Tarefas")
            .should("be.visible");
        //Clica novamente para abrir o modal
        cy.get('[data-cy="create-todo-button"]')
            .click();
        cy.get('[data-cy="title-input"]')
            .should("be.visible");
    })
})