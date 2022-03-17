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


<p dir="auto">Execute a migração para definir o esquema SQL básico
knex migrate:latest</p>


<p dir="auto">Executar servidor <br>
npm start // prod mode <br>
npm run development // dev mode</p>


<h5 dir="auto"><a id="user-content-auth" class="anchor" aria-hidden="true" href="#auth"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>/auth</h5>


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


<h5 dir="auto"><a id="user-content-users" class="anchor" aria-hidden="true" href="#users"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>/users</h5>


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
 
