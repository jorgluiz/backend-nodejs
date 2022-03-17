const environment = process.env.NODE_ENV || 'development' // Ambiente de desenvolvimento
const config = require('../../knexfile.js')[environment]
const knex = require('knex')(config)  //(config['production']) //(config.production)

// carregar todas minhas migrates (tabelas db)
knex.migrate.latest([config])

module.exports = knex //exports knex com configuração para conexão

// .....
// switch com process.env.NODE_ENV

// const app = express()

// let dbConnectionConfig

// switch (process.env.NODE_ENV){
//   case 'production':
//     dbConnectionConfig = dbConfigObj.production :
//     break;
//   default:
//     dbConnectionConfig = dbConfigObj.development
// }

// const appDb = connectToDb(dbConnectionConfig)
// Model.knex(appDb)