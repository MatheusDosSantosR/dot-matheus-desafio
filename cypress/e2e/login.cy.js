describe('Login de Usuário', () => {

    it.only('Login com credenciais corretas', () => {
        cy.createUserApi().then(user => {
            console.log("user", user)
        })
        cy.visit('https://example.cypress.io')
    })
    it('Tentativa de login com senha incorreta', () => {
        cy.visit('https://example.cypress.io')
    })
    it('Tentativa de login com email não cadastrado', () => {
        cy.visit('https://example.cypress.io')
    })
    it('Tentativa de login com senha menor que 6 caracteres', () => {
        cy.visit('https://example.cypress.io')
    })
    it('Tentativa de login com campos obrigatórios vazios', () => {
        cy.visit('https://example.cypress.io')
    })
    it('Teste de logout', () => {
        cy.visit('https://example.cypress.io')
    })
})