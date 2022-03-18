<p>Não posso dizer que é um RESTful API, porque precisa implemetar os três níveis, segundo o Sr. Richardson.
   artigo <a href="https://www.brunobrito.net.br/richardson-maturity-model/"></a>
</p>
<p>Minha API contém apenas dois níveis</p>
<p>Para se tornar uma RESTful API, precia implementar filosofia HATEOS nível 3</p>
<P>Resumidamente o HETEOS é um guia de recursos. Ex: faz uma requisição verbo GET client, 
o reponse tem que ter links relacionado ou não aquela entidade.</P>
<p>Por isso não posso considerar uma RESTful API</p>
<ul dir="auto">
    <li>ES6 ES7 ES8</li>
    <li>Action based</li>
    <li>SQL based (PostgreSQL with objection.js)</li>
    <li>Migrations(knex.js)</li>
    <li>Auth (JWT/Access-token/Refresh-token)</li>
    <li>Request validation</li>
    <li>CRUD(users, posts resources)</li>
    <li>Crypto (password)</li>
    <li>Dotenv (environment variables)</li>
</ul>

<h4>1. Camada Controller</h4>
<h4>2. Camada Models</h4>
<h4>2. Camada Routes</h4>

<h3>Desenvolvimento:</h3>

<h4>Instale as dependências globais:</h4>

<h6>npm i -g knex nodemon</h6>

<h4>Banco de dados de configuração:</h4>

1. instale o PostgresSQL para windows <a href="https://www.postgresql.org/download/windows/">Postgres</a>
2. Crie configutação knexfile.js

O arquivo env vai conter as variáveis de ambientes

- Defina a credencial necessária em .env

<p dir="auto">Execute a migrate para definir o esquema SQL básico</p>
<p>knex migrate:latest</p>


<p dir="auto">Executar servidor</p>
<p> npm start // prod mode </p>
<p> npm run development // dev mode</p>

<h4>Implemented endpoints:</h4>

<h5>/auth</h5>

<table>
    <thead>
        <tr>
            <th>Verb HTTP</th>
            <th>URI</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/auth/login</td>
            <td>LoginAction</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/auth/logout</td>
            <td>LogoutAction</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/auth/refresh-tokens</td>
            <td>RefreshTokensAction</td>
        </tr>
    </tbody>
</table>

<h5>/users</h5>

<table>
    <thead>
        <tr>
            <th>Verb HTTP</th>
            <th>URI</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>getById</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/users/:id</td>
            <td>getAllUsers</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>save</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/users</td>
            <td>updateUserId</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/users/:id</td>
            <td>removeById</td>
        </tr>
    </tbody>
</table>

<h5>/prontuarios</h5>

<table>
    <thead>
        <tr>
            <th>Verb HTTP</th>
            <th>URI</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/prontuarios</td>
            <td>getByCpf</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/prontuarios</td>
            <td>saveFile</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/prontuarios/:id</td>
            <td>removeByCpf</td>
        </tr>
    </tbody>
</table>
