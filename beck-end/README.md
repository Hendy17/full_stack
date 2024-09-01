
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

* DELETE /api/tasks/:id - Remove uma tarefa.

