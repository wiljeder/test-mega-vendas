# Teste - Super Mega Vendas

## Dependências

- Node.js
- Yarn ou NPM
- Docker

## Instruções para rodar o projeto

1. Clone o repositório
2. Abra o terminal e navegue até a pasta do projeto
3. Definir os arquivos de variáveis ambiente
   - Copie o arquivo `.env.example` e renomeie para `.env` na pasta raiz do projeto
   - Copie o arquivo `.env.example` e renomeie para `.env` na pasta `backend`
   - Copie o arquivo `.env.local.example` e renomeie para `.env.local` na pasta `frontend`
   - Preencha as variáveis ambiente com as informações necessárias
4. Execute o comando `docker compose up -d` para subir o banco de dados e os containers do projeto

## Aplicações

- O front-end estará disponível em `http://localhost:3000`
  - Usuário de teste:
    - username: `tester`
    - password: `123456`
- O back-end estará disponível em `http://localhost:3333`
- Uma instância do adminer estará disponível em `http://localhost:8080`

## Postman

Dentro da pasta `postman` há 3 arquivos com as rotas da aplicação, são eles:

- `Auth.postman_collection.json`: Rotas de autenticação
- `Group.postman_collection.json`: Rotas de grupos
- `Contact.postman_collection.json`: Rotas de contatos

Basta importar os arquivos no Postman e começar a testar as rotas que não estão disponíveis via front-end.
