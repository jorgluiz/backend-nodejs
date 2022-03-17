
<ul dir="auto">
<li>Modular RESTful API</li>
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
2. Crie configutação knexfile.js <br> O arquivo env vai conter as variáveis de ambientes

- Defina a credencial necessária em .env

<p dir="auto">Execute a migrate para definir o esquema SQL básico <br>
knex migrate:latest</p>


<p dir="auto">Executar servidor <br>
npm start // prod mode <br>
npm run development // dev mode</p>

<h4>Implemented endpoints:</h4>

<h5>/auth</h5>

<table>
<thead>
<tr>
<th>Path</th>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/auth/login</td>
<td>POST</td>
<td>LoginAction</td>
</tr>
<tr>
<td>/auth/logout</td>
<td>POST</td>
<td>LogoutAction</td>
</tr>
<tr>
<td>/auth/refresh-tokens</td>
<td>POST</td>
<td>RefreshTokensAction</td>
</tr>
</tbody>
</table>

<h5>/users</h5>

<table>
<thead>
<tr>
<th>Path</th>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/users</td>
<td>GET</td>
<td>getById</td>
</tr>
<tr>
<td>/users/:id</td>
<td>GET</td>
<td>getAllUsers</td>
</tr>
<tr>
<td>/users</td>
<td>POST</td>
<td>save</td>
</tr>
<tr>
<td>/users</td>
<td>PUT</td>
<td>updateUserId</td>
</tr>
<tr>
<td>/users/:id</td>
<td>DELETE</td>
<td>removeById</td>
</tr>
</tbody>
 
 
<table>
<thead>
<tr>
<th>Path</th>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/prontuarios</td>
<td>GET</td>
<td>getByCpf</td>
</tr>
<tr>
<td>/prontuarios</td>
<td>POST</td>
<td>saveFile</td>
</tr>
<tr>
<td>/prontuarios/:id</td>
<td>PUT</td>
<td>removeByCpf</td>
</tr>
</tbody>
</table>
