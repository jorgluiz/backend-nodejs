
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

1. instale o PostgresSQL windows
2. Crie configutação knexfile.js o arquivo env vai conter as variáveis de ambientes

- Defina a credencial necessária em .env

<p dir="auto">Execute a migração para definir o esquema SQL básico <br>
knex migrate:latest</p>


<p dir="auto">Executar servidor <br>
npm start // prod mode <br>
npm run development // dev mode</p>


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
<td>/users/current</td>
<td>GET</td>
<td>GetCurrentUserAction</td>
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
<td>/prontuario</td>
<td>GET</td>
<td>getByCpf</td>
</tr>
<tr>
<td>/prontuario</td>
<td>POST</td>
<td>saveFile</td>
</tr>
<tr>
<td>/prontuario/:id</td>
<td>PUT</td>
<td>removeByCpf</td>
</tr>
</tbody>
</table>
