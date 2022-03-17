<h1>Deploy Heroku (Backend)</h1>

<h2>Passos para o deploy...<h2>
 
 <h3>1) Instalar o HEROKU CLI</h3>
 
 npm install -g heroku-cli  (pro mac)
 
 heroku.exe (10 windows)
  
<h3> 2) Verificar a instalação do Heroku CLI</h3>
 
 heroku --version
 		
 <h3>3) Efetuar o login com Heroku CLI</h3>
 
 no terminal coloque: 
  - heroku login
    <h6>Email: <SEU E-MAIL></h6>
    <h6>Password: **********</h6>
    <h6>Logged in as <SEU E-MAIL></h6>
     
     <h5>NOTA</h5>
     <h6>Necessário ter um usuário registrado no Heroku.</h6>
     <h6>Acessar: <a href="https://signup.heroku.com/login">Heroku Signup</a></h6>
     
     <h3>4) Clonar o repositório do projeto backend</h3>
     
     GIT CLONE https://github.com/jorgluiz/backend-flavio
     
     <h3>6) Criar um projeto no Heroku via Heroku CLI</h3>
     
     heroku create backend-app
     
     <h6>IMPORTANTE</h6>
     
     <h6> escolher um nome único.</h6>
     
     <h3>7) Selecionar o buildpack para NodeJS</h3>
     
     heroku buildpacks:set heroku/nodejs
     
     <h3>8) Configurar o repositório remoto</h3>
     
     heroku git:remote -a backend-app
     
     <h6>IMPORTANTE</h6>
    <h5> Usar o nome do seu projeto.</h5>

     <h3>11) Configurar as variáveis de ambiente que a aplicação backend usa.</h3>
     
     <h6># Gere o seu próprio AUTH_SECRET</h6>
     heroku config:set   <span>REFRESH_TOKEN_SECRET=42335373-0c8f-4ed8a-8773-589dfa<span>
     
     <h3>12) Fazer deploy da aplicação via push no repositório.</h3>
     
     git push heroku master
     
     
    <h3> 13) Definir o tipo de escalonamento mínimo (grátis) - Passo Opcional</h3>
     
     heroku ps:scale web=1
     
     <h3>14) Consultar o log e verificar se tudo ocorreu bem - Passo Opcional</h3>
     
      heroku logs --tail
     
     
     <h1>aqui começa interação do backend com banco de dados (postgres)<h1>
      
      <h1>1) Na página do heroku, vá em Overview </h1>
      
      depois  em: 
      <h6>configure-Add-ons</h6>
      
      ![Installed add-ons](https://user-images.githubusercontent.com/35885897/158028566-f4cafba2-9e13-421e-8686-44d36d11d330.png)
      
      <h3>2) pesquisa por heroku postgres</h3>
      
      
![posgres](https://user-images.githubusercontent.com/35885897/158028718-56421ba0-5c49-4b5c-b2c3-31faf11496ea.png)
      
      
<h3>3) Selecionar o plano free</h3>
      
      
![plano](https://user-images.githubusercontent.com/35885897/158028794-89f51809-29b9-47a6-a82f-e7b8517ad25e.png)
      
      
<h3>4) Depois vá em Settings e Config var</h3>
      
<h6> variáveis de ambientes</h6>
      
      
![variável](https://user-images.githubusercontent.com/35885897/158029053-d8f9ea28-28d2-45ea-a954-053643249355.png)
      
      
      
<h3>5) Colocar varável de ambiente no .env e na conexão com banco de dados</h3>


![conexao](https://user-images.githubusercontent.com/35885897/158029411-bbea68b9-ed83-478d-922d-cdeda16522e4.png)

      
      



     
