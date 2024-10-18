# Histórias de usuário

## História do Usuário 1: Cadastro de Usuário

Como um novo usuário, quero ser capaz de me cadastrar no sistema utilizando um endereço de email e uma senha, para que eu possa acessar minha conta e utilizar o aplicativo de tarefas.

### Critérios de aceite

1. O usuário deve fornecer um endereço de email válido (campo obrigatório).
2. O usuário deve definir uma senha com um mínimo de 6 caracteres (campo obrigatório).
3. O sistema deve verificar se o email já está registrado.
4. O sistema deve enviar um email de confirmação de cadastro (opcional).
5. O usuário deve receber uma mensagem de sucesso ou erro após o cadastro.

### Casos de testes

1. Cadastro com email e senha válidos

    - **Passos**: Preencher o email e a senha com informações válidas. Clicar em "Cadastrar".
    - **Resultado esperado**: O sistema registra o usuário com sucesso e exibe uma mensagem de confirmação.

2. Tentativa de cadastro com email já registrado
    - **Passos**: Inserir um email que já foi utilizado para cadastro. Clicar em "Cadastrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro indicando que o email já está registrado.
3. Tentativa de cadastro com email inválido
    - **Passos**: Inserir um email no formato incorreto. Clicar em "Cadastrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que o email é inválido.

4. Tentativa de cadastro com senha menor que 6 caracteres
    - **Passos**: Inserir uma senha com menos de 6 caracteres. Clicar em "Cadastrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que a senha precisa ter no mínimo 6 caracteres.

5. Tentativa de cadastro sem preencher campos obrigatórios
    - **Passos**: Deixar o email e/ou senha em branco. Clicar em "Cadastrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que os campos são obrigatórios.

## História do Usuário 2: Login de Usuário

Como um usuário cadastrado, quero ser capaz de fazer login utilizando meu email e senha, para que eu possa acessar minha conta e gerenciar minhas tarefas.

## Critérios de aceite

1. O usuário deve inserir um email e uma senha válidos.
2. O sistema deve verificar se as credenciais correspondem a uma conta existente.
3. O usuário deve ser redirecionado para a página inicial após um login bem-sucedido.
4. Se o email ou senha estiverem incorretos, uma mensagem de erro deve ser exibida.

## Casos de testes

1. Login com credenciais corretas

    - **Passos**: Inserir email e senha corretos. Clicar em "Entrar".
    - **Resultado esperado**: O sistema faz o login com sucesso e redireciona o usuário para a página inicial.

2. Tentativa de login com senha incorreta
    - **Passos**: Inserir um email correto e uma senha incorreta. Clicar em "Entrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que a senha está incorreta.

3. Tentativa de login com email não cadastrado
    - **Passos**: Inserir um email que não está cadastrado. Clicar em "Entrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que o email não está registrado.

4. Tentativa de login com senha menor que 6 caracteres
    - **Passos**: Inserir uma senha com menos de 6 caracteres. Clicar em "Entrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que a senha precisa ter no mínimo 6 caracteres.

5. Tentativa de login com campos obrigatórios vazios
    - **Passos**: Deixar o campo de email e senha em branco. Clicar em "Entrar".
    - **Resultado esperado**: O sistema exibe uma mensagem de erro informando que os campos são obrigatórios.

6. Teste de logout
    - **Passos**: Fazer login e, em seguida, clicar em "Sair" ou "Logout".
    - **Resultado esperado**: O sistema faz o logout e redireciona o usuário para a página de login.


## História do Usuário 3: Criar uma Tarefa

Como um usuário, eu quero ser capaz de criar uma nova tarefa, especificando um título, uma descrição e definindo sua prioridade, para organizar meu trabalho de maneira mais eficiente.

## Critérios de aceite

1. O usuário deve ser capaz de inserir um título para a tarefa (campo obrigatório).
2. O usuário pode adicionar uma descrição à tarefa (campo opcional).
3. O usuário deve escolher uma prioridade para a tarefa (campo opcional).
4. A tarefa deve ser salva no sistema e visível na lista de tarefas.

## Casos de testes

1. Criação de tarefa com todos os campos preenchidos
    - **Passos**: Preencher o título, descrição e prioridade. Clicar em "Criar".
    - **Resultado esperado**: A tarefa é criada com sucesso e aparece na lista de tarefas.

2. Criação de tarefa com campo de descrição vazio
    - **Passos**: Preencher o título e a categoria, deixar a descrição em branco. Clicar em "Criar".
    - **Resultado esperado**: A tarefa é criada com sucesso sem descrição.

3. Tentativa de criação tarefa com o campo de título vazio
    - **Passos**: Deixar o campo de título vazio, preencher descrição e categoria. Clicar em "Criar".
    - **Resultado esperado**: Um erro é exibido indicando que o título é obrigatório.

4. Teste de cancelamento da criação de uma nova tarefa
    - **Passos**: Iniciar o processo de criação, preencher os campos e clicar em "Cancelar".
    - **Resultado esperado**: Nenhuma tarefa é criada.

# Testes Automatizados

## Testes de Funcionalidade

### Cadastro de Usuário
- **Caso de Teste 1**: Cadastro com email e senha válidos
- **Caso de Teste 2**: Tentativa de cadastro com email já registrado
- **Caso de Teste 3**: Tentativa de cadastro com email inválido
- **Caso de Teste 4**: Tentativa de cadastro com senha menor que 6 caracteres
- **Caso de Teste 5**: Tentativa de cadastro sem preencher campos obrigatórios

#### Login de Usuário
- **Caso de Teste 1**: Login com credenciais corretas
- **Caso de Teste 2**: Tentativa de login com senha incorreta
- **Caso de Teste 3**: Tentativa de login com email não cadastrado
- **Caso de Teste 4**: Tentativa de login com senha menor que 6 caracteres
- **Caso de Teste 4**: Tentativa de login com campos obrigatórios vazios
- **Caso de Teste 5**: Logout

#### Criar Tarefa
- **Caso de Teste 1**: Criação de tarefa com todos os campos preenchidos
- **Caso de Teste 2**: Criação de tarefa com campo de descrição vazio
- **Caso de Teste 3**: Tentativa de criação tarefa com o campo de título vazio
- **Caso de Teste 4**: Teste de cancelamento da criação de uma nova tarefa

## Tempo de teste

Para calcular tempo dos testes utilizei a seguinte fórmulas:

- (ME) - Media de execução dos 15 casos de testes.
- (MP) - Media do tempo de preparação do ambiente.
- (MC) - Margem de contigencia de 10%
- (TT) - Tempo de teste TT = ME + MT + MC

Cálculos
```bash
# Foi utilizado os tempo de execução do pipeline

# Tempo de execução dos testes nos ultimos 3 pipelines
ME = (1,45m + 1,24m + 1,18m) / 3;
ME = 1,79m

# Tempo de execução de instalação das dependencias nos ultimos 3 pipelines
MP = (0,69m + 0,29m + 0,28m) / 3;
MP = 0,42m

# MC = (ME + MP) * 0,10
MC = (1,79m + 0,42m) ∗ 0,10 = 0,221 minutos

#TT = ME + MT + MC
TT = 1,79m + 0,42m + 0,221m

TT = 2 minutos e 43 segundos.
```
