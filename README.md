<h1 align="center">[Work in Progress] - Title - Subtitle</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.1.0-blue" 
    alt="React Ver. ^18.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 4.6.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto
Descrição do projeto:
- Intro da aplicação
- Origem da aplicação?
- Por que fez e sua utilidade?

### Exemplo
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Utilização do conceito de css modules, e Sass

Utilização do conceito de api roots do NextJS

Nele aborda a criação de um projeto do zero em <strong>JavaScript</strong>  e depois refatorado para <strong>TypeScript</strong>, também contém a configuração <strong>Webpack</strong> e <strong>Babel</strong> do zero.

Contendo anotações e comentários particulares servindo de consulta para novos projetos.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Stripe](https://stripe.com/br)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Next.js](https://nextjs.org/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/nome-do-repo.git

$ cd nome-do-repo
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run start
```
- O app estará disponível no seu browser pelo endereço http://localhost:3000.

- Lembrando que será necessário configurar e rodar o [Servidor](https://github.com/Jonathan-Rios/repo-server.git) para ver o funcionamento completo.

- Não necessário para rodar, mas caso queira ver o projeto [Mobile](https://github.com/Jonathan-Rios/repo-mobile.git)

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

 - [Layout Web](https://www.figma.com/community/file/1102912516166573468) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />

---

## 📝 Anotações pessoais

<br />

<h3>Exemplo de descrição </h3>

```bash

➜ yarn create next-app ignews
➜ yarn add typescript @types/react @types/node -D # Após instalar o typescript e dependências só alterar os .js para .tsx
➜ yarn add sass
➜ yarn add react-icons

➜ yarn add stripe # é uma SDK (Software Development Kit), uma biblioteca para lidar diretamente com a API do stripe, para não precisar criar todas as requisições para o Stripe através de http ( o que é possível ), com a sdk mostra os métodos e rotas que existem e etc..

➜ yarn add next-auth
➜ yarn add @types/next-auth -D

➜ yarn add faunadb
➜ yarn add axios
➜ yarn add @stripe/stripe-js # Para utilizar recursos públicos ( sem passar chave ) para rodar client-side.
```


<h3>Criando e configurando o projeto</h3>
<p> Após criar o projeto, adicionamos a pasta src no root, e colocamos a pages dentro dela ( Cuidado, existem algumas regras a serem respeitadas pois a pages sempre precisa existir e manter esse nome, e o único local permitido de ser alterado é da root para src, qualquer outra pasta que colocar o pages vai dar ruim.)
</p>
<p> Outra parte bacana é que dentro dessas pages o next transforma em api as pages que adicionarmos, sendo o index o inicial que vai abrir na 3000 direto, e se adicionarmos uma page product em pages, vai ser criada uma rota "...:3000/product".
</p>


<h3>Configurando para usar o css modules do Next.js</h3>
<p>No next ele trabalha com o conceito CSS Scoped, ao criar seus arquivos css, precisa renomear de ex. home.css para home.module.css.</p>
<p>Assim ele cuida de aplicar o scoped para você, onde seu css não afetara outros componentes da aplicação.
Um plugin que auxilia a trabalhar com esse conceito é o "css modules" oferece auto complete e melhora na navegação ( Ctrl + click para editar)</p>
<p>Um detalhe a ser comentado, nesse conceito não podemos passar tag direta, sendo necessário passar um ID ou Class para os elementos.</p>



<h3>Utilizando estilização com Sass</h3>
<p>O Sass permite usarmos 2 tipos de extensão, .sass e .scss nesse projeto vamos utilizar por preferência de legibilidade o .scss que exige que usemos chaves nas propriedades do css</p>

<h3>Importando fontes e outros itens no Next.js</h3>
<p>Um conceito diferente na utilização do Next.js é a forma de adicionar por exemplo uma fonte
nesse projeto não temos aquele index.html onde adicionamos geralmente, se tentarmos adicionar no _app.tsx
vai dar um problema pois ele é chamado em todos os locais e recarregado várias vezes causando um problema.</p>
<p>para esses casos o Next apresenta o _document.tsx (ou js dependendo de como está utilizando)
pois ele só carrega uma vez, sendo um bom local para adicionar conteúdos desses tipos.</p>

.sass (podemos usar sem chaves)
```scss

.title 
  color: red

```
.scss (devemos usar com chaves) 
```scss
.title {
  color: red
}
```

<h3>Dicas de estilização</h3>
<p>Sempre que usar um line-height do mesmo tamanho que o elemento que o contém, o elemento do line-height ficará centralizado.</p>

```scss
.headerContent {
  nav {
    height: 5rem;
    a {
      height: 5rem;
      line-height: 5rem; // Se colocar o line height do mesmo tamanho que ele oculpa, ficará sempre ao centro
    }
  }
```
<p>Quando quer adicionar uma margem a esquerda de uma lista de elementos, e não quer adicionar no primeiro item.</p>

```scss
  & + a { //Toda a ancora que antes dela ela outra ancora
    margin-left: 2rem;
  }
```
<p>Quando quiser criar um botão arredondado que "respeite" a altura, geralmente damos ao border-radius a metade da altura, porem se passar o mesmo valor da altura ele pega o máximo permitido que seria a metade da altura. ( Lembrando que quando se passa "border-radius: 100%, que vai além da altura.)</p>

```scss
.signInButton {
  height: 3rem;
  border-radius: 3rem; // Mesmo resultado que 1.5rem
}
```

<h3>Boas práticas: Quando criar um componente?</h3>
<p>Exemplo, no header dessa aplicação temos um botão que tem a seguinte funcionalidade, ao estar logado ela muda a cor indicando isso e "deslogado" fica de outra cor. Algo simples porém se não isolar esse elemento do header ( não criar um componente só para o botão ), sempre que atualizar esse status no header ele vai renderizar o header todo, sendo que podemos renderizar só o botão.</p>

<h3>Dica de desenvolvimento</h3>
<p>Dica de desenvolvimento, sempre que for lidar com preços e valores no banco armazene eles em centavos pois fica muito mais fácil os tratamentos e manipulações.</p>

<h3>Tipos de autenticação possíveis com NextJS</h3>
<p>
Opções:
  * JWT (Storage)
    Para grande maioria das aplicações que não são de grande porte, não existe método mais simples de autenticação do que:
    * usar um JWT.
    * salvar esse token em um Storage qualquer ( seja LocalStorage ou Cookies ).
    * recuperar esse token.
    * colocar uma data de expiração.
    * trabalhar ele com refresh token.
  * Next Auth (Social)
    * Utilizamos quando queremos um método de autenticação simples e queremos utilizar login Social na nossa aplicação (gitHub Google facebook etc...).
    * Utilizado também quando não queremos armazenar no nosso backend credenciais de acesso do usuário, 
    * Ele até tem suporte para realizar autenticação com e-mail e senha mas sua ideia é dele não depender de ter um backend.
  * Cognito (do AWS) (não foi detalhado a fundo na aula).
  * Auth0 (não foi detalhado a fundo na aula).

(que continua seguro sim!, claro NADA é 100% seguro)

  JWT (Storage)
 Next Auth (Social )
</p>




<h3></h3>
<h3></h3>
<p></p>
<p></p>
<p></p>

.title {
  color: red
}
<br />

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)