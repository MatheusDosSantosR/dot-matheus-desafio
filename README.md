# Projeto To-Do List

## Descrição
Este projeto tem como objetivo automatizar os testes de uma aplicação web de gerenciamento de tarefas ( [to-dos](https://tarefas.matheus-santos.com/) ). A aplicação permite aos usuários gerenciar suas tarefas, incluindo a criação, edição, exclusão, adição de subtarefas e gerenciamento de informações pessoais. Para garantir a qualidade e a funcionalidade, os testes automatizados foram implementados utilizando o Cypress, que é uma ferramenta moderna para testes de front-end, especialmente adequada para aplicativos web modernos.

## Funcionalidades
- Cadastro, Login é edição de usuários
- Criação, edição e exclusão de tarefas
- Adição de subtarefas

## Instalação
Para configurar o ambiente e rodar os testes automatizados, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/dot-matheus-desafio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
    cd dot-matheus-desafio
   ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Testes Automatizados
A documentação completa dos testes pode ser encontrada [aqui](./TESTS.md).

## Execução de Testes
Para rodar os testes automatizados, use o seguinte comando:
- Execução via CLI
```bash
npm run cy:run
```

- Execuçaõ via GUI ( Interface Grafica )

```bash
npm run cy:open
```