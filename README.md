<p>
    <h5>Não posso dizer que é um RESTful API, porque precisa implemetar os três níveis, segundo o Sr. Richardson.</h5>
    <a href="https://www.brunobrito.net.br/richardson-maturity-model/">artigo</a>
    </p>
    <p>Minha API contém apenas dois níveis</p>
    <p>Para se tornar uma RESTful API, precisa implementar filosofia HATEOS nível - 3</p>
    <P>Resumidamente o HETEOS é um guia de recursos. Ex: faz uma requisição verbo GET Client,
        o response tem que ter links relacionado ou não aquela entidade, tudo vai depender da regra de negócio.</P>
    <p><h5>Por isso não posso considerar uma RESTful API</h5></p>
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
<td>/auth/signin</td>
<td>signinAction</td>
</tr>
<tr>
<td>POST</td>
<td>/auth/signup</td>
<td>signuptAction</td>
</tr>
<tr>
<td>POST</td>
<td>/auth/refresh-tokens</td>
<td>RefreshTokensAction</td>
</tr>
</tbody>
</table>
    
<h5>/client</h5>
    
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
<td>/client/:id</td>
<td>getById</td>
</tr>
<tr>
<td>GET</td>
<td>/client</td>
<td>getAllUsers</td>
</tr>
<tr>
<td>POST</td>
<td>/client</td>
<td>save</td>
</tr>
<tr>
<td>PUT</td>
<td>/client</td>
<td>updateUserId</td>
</tr>
<tr>
<td>DELETE</td>
<td>/client/:id</td>
<td>removeById</td>
</tr>
</tbody>
</table>
    
<h5>/posts</h5>
    
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
  <td>/posts</td>
 <td>getByCpf</td>
  </tr>
<tr>
<td>POST</td>
<td>/posts</td>
 <td>saveFile</td>
 </tr>
 <tr>
  <td>PUT</td>
  <td>/posts/:id</td>
<td>removeByCpf</td>
</tr>
</tbody>
</table>
