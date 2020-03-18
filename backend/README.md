# Blog Manager Back-end

Blog Manager é uma aplicação web responsiva que é responsavel pela criação. edição e remoção de posts de um blog.

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-Pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-rotas">Rotas</a>
</p>

## :rocket: Tecnologias
-  [Node.js](https://nodejs.org)
-  [Express](https://expressjs.com/)
-  [express-async-errors](https://github.com/davidbanham/express-async-errors)
-  [Cors](https://github.com/expressjs/cors)
-  [Dotenv](https://github.com/motdotla/dotenv/)
-  [Youch](https://github.com/poppinss/youch)
-  [Nodemon](https://nodemon.io/)
-  [Prettier](https://prettier.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)

## :warning: Pré-requisitos
Para instalar essa aplicação é preciso ter o [Node na versão LTS](https://nodejs.org/en/) e o [git](https://git-scm.com) instalados na sua máquina.

## :information_source: Instalação
```bash
# Clone esse repositorio
$ git clone https://github.com/fabriciodanioj/blog-manager

# Entre na pasta do projeto
$ cd blog-manager/backend

# Instale as dependencias
$ yarn 

# Inicie o servidor que irá rodar na porta 3333
$ yarn dev
```

## :memo: Rotas

### base_url -> `http://localhost:3333`

- [x] Criação de Posts
- POST `/post` -> Cria um novo Post
- DELETE `/post/:id` -> Deleta um Post
- GET `/post` -> Lista os Posts criados
- GET `/post/:id` -> Mostra um Post
- PUT `/post/:id` -> Edita um Post


---
## Meta
Feito com ♥ por Fabricio Dani :wave: [LinkedIn!](https://www.linkedin.com/in/fabricio-dani-373469176/)

Distribuido sobre licensa do MIT. Veja [LICENSE](https://github.com/fabriciodanioj/dafne-backend/blob/master/LICENSE) para mais informações.

[https://github.com/fabriciodanioj](https://github.com/fabriciodanioj)
