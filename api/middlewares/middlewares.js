/* eslint-disable linebreak-style */
// config os middlewares do EXPRESS

// const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
	// app.use(bodyParser.urlencoded({extend: true}))
	// app.use(bodyParser.json())
	app.use(cors())
}