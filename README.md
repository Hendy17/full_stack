# Front-End

Este é o projeto do front-end da aplicação full stack.

## Tecnologias Utilizadas

- **Angular 18**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Bootstrap ou Angular Material** (dependendo de sua escolha)
- **Vite** para o desenvolvimento e build

## Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git

2. **Navegue até o diretório do front-end:**
    ```bash
    cd full_stack/front-end

3. **Instale as ependências:**
    ```bash
    npm install

4. **Executar o projeto em ambiente de desenvolvimento:**  
  ```bash
    ng serve
  ```
5. **Build para produção:**
     ```bash
    ng build --prod
    ```
6. **Acessando a aplicação:**    
   ```bash
    http://localhost:4200/    
    ```
## Estrutura do Projeto

* src/app/: Diretório principal do aplicativo Angular.
* app.component.ts: Componente principal da aplicação.
* task.service.ts: Serviço para comunicação com o back-end.
* assets/: Arquivos estáticos como imagens e ícones.
* environments/: Configurações de ambiente para diferentes ambientes de build (desenvolvimento, produção).


### Back-End

```markdown
# Back-End

Este é o projeto do back-end da aplicação full stack.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **MySQL** como banco de dados
- **MySQL2** para conexão com o banco de dados

## Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   ```

2. **Navegue até o diretório do back-end:**
```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
```

3. **Instale as dependências:**
```bash
  npm install
```
4. **Configuração do banco de dados:**
* Certifique-se de ter o MySQL instalado e rodando.

* Crie um banco de dados e atualize as configurações no arquivo src/db.ts com seu usuário, senha e nome do banco.


5. **Executar o projeto em ambiente de desenvolvimento:**
```bash
  npm start
```

6. **Acessando a API:**
```bash
  http://localhost:3232/api/tasks  
```

## Estrutura do Projeto

* src/index.ts: Arquivo de entrada principal que configura o servidor Express.

* src/routes/tasks.ts: Define as rotas da API para operações CRUD de tarefas.

* src/db.ts: Configuração e conexão com o banco de dados MySQL.


## Endpoints da API

* GET /api/tasks - Retorna todas as tarefas.

* POST /api/tasks - Adiciona uma nova tarefa.

* PUT /api/tasks/:id - Atualiza uma tarefa existente.

* PUT /api/tasks/:id/restart - Reinicia o status de uma tarefa.


# Autenticação com JWT - Projeto Full Stack

Este projeto implementa uma funcionalidade de autenticação de usuário utilizando JSON Web Tokens (JWT). O objetivo é proteger as rotas da API e garantir que apenas usuários autenticados possam acessar determinados recursos.

## Funcionalidades

1. **Registro de Usuário**
   - Rota: `POST /api/auth/register`
   - Descrição: Registra um novo usuário no sistema.
   - Requisição:
     ```json
     {
       "username": "seu_username",
       "password": "sua_senha"
     }
     ```
   - Resposta:
     ```json
     {
       "message": "Usuário registrado com sucesso"
     }
     ```

2. **Login de Usuário**
   - Rota: `POST /api/auth/login`
   - Descrição: Autentica um usuário e retorna um token JWT.
   - Requisição:
     ```json
     {
       "username": "seu_username",
       "password": "sua_senha"
     }
     ```
   - Resposta:
     ```json
     {
       "token": "seu_token_jwt"
     }
     ```

3. **Proteção de Rotas com JWT**
   - As rotas protegidas utilizam o middleware de autenticação para validar o token JWT.
   - Exemplo de rota protegida:
     - `GET /api/tasks` - Requer o cabeçalho `Authorization: Bearer seu_token_jwt`

## Como Funciona

1. **Registro de Usuário**: Quando um novo usuário se registra, a senha é criptografada usando `bcrypt` e armazenada no banco de dados.

2. **Login de Usuário**: Durante o login, a senha fornecida é comparada com a senha criptografada armazenada. Se a autenticação for bem-sucedida, um token JWT é gerado e retornado ao usuário.

3. **Proteção de Rotas**: O token JWT deve ser incluído no cabeçalho `Authorization` para acessar rotas protegidas. O middleware verifica se o token é válido antes de permitir o acesso.

## Exemplo de Uso com Postman

### Registro de Usuário

1. Abra o Postman.
2. Selecione `POST` e insira a URL: `http://localhost:3232/api/auth/register`.
3. No corpo da requisição, selecione `raw` e `JSON` e insira:
   ```json
   {
     "username": "novo_usuario",
     "password": "nova_senha"
   }


4. Clique em Send. Você deverá receber uma mensagem confirmando o registro do usuário.

