/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken')
var CryptoJS = require('crypto-js')
// const randtoken = require('rand-token')

require('dotenv').config()

module.exports = app => {

	const signin = async (req, res, next) => {
		//req.body           req.body
		if (!req.body.email || !req.body.password) { //validação. Se usuário passou email  e  passsowrd
			return res.status(400).send('User or password incorrect') // "Informe usuário e senha correto"
		}

		// tratando email que vem da requisição ( req.body.email )
		// obs: se vinher na req um email com letras maiúsculas conveter para minúsculas
		const reqBodyEmail = req.body.email
		const emailString = JSON.stringify(reqBodyEmail) // colocando string
		const emailMinusculo = emailString.toLocaleLowerCase() // passando pra letra minúscula
		// eslint-disable-next-line quotes
		const email = emailMinusculo.replace(/\"/g, "") // removendo  aspas

		// obter usuário pelo email da ( requisição )
		const user = await app.db('users') // pra quando usuário logar verificar se esse email tá cadastrado no banco de dados
			.where({ email: email }) // se não encontrar o email no banco de dados ( false )
			.first()
		// .catch(err => res.status(500).send())
		if (!user) return res.status(409).json({ Conflict: `E-mail ${email} does not exist` }) // ( false ) usuário não encontrado  "Usuário não encontrado"

		// decrypt do password para poder comparar a senha do usuario do banco de dados com senha que foi passada no body
		const passwordBytes = CryptoJS.AES.decrypt(user.password, process.env.SALT_KEY)
		const originalPassword = passwordBytes.toString(CryptoJS.enc.Utf8)
		// console.log(req.body.password, originalPassword)

		if (originalPassword !== req.body.password) { //compere password
			return res.status(401).json({ rror: 'User or password incorrect' }) // "senha inválida"
		}

		// const now = Math.floor(Date.now() / 1000) //data em segundos

		//payload 
		const payload = {
			id: user.id,
			admin: user.admin
		}

		const accessToken = await jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })

		// const refreshToken = await jwt.sign({ payload }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })

		res.json({ accessToken })



	}

	return { signin }
}



// obter usuário pelo email da ( requisição )
// const user = await app.db('users') // pra quando usuário logar verificar se esse email tá cadastrado no banco de dados
// .where({ email: email }) // se não encontrar o email no banco de dados ( false )
// .first()
// .catch(err => res.status(500).send())
//if (!user) return res.status(409).json({ error: 'email does not exist' }) // ( false ) usuário não encontrado  "Usuário não encontrado"



//   OPÇÃO 1 ### ### ###

// let tokenList = {}

// const newUser = {
//     id: user.id,
//     name: user.name
// }

// // geração PLAYLOAD =carga útil  ### NÃO PASSAR PASSWORD ###
// const token = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '300s' })
// const refreshToken = jwt.sign(newUser, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '300s' })
// const response = {
//     "token": token,
//     "refreshToken": refreshToken,
// }
// tokenList[refreshToken] = response
// console.log(tokenList)
// res.status(200).json(response);




// const payload = {
//     id: user.id,
//     admin: user.admin
// }





//   OPÇÃO 2 ### ### ###

// const accessToken = await jwt.sign({
//     id: user.id,
//     admin: user.admin
// }, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: '1h'
// })

// const refreshToken = await jwt.sign({
//     id: user.id,
//     admin: user.admin,
// }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: '1h'
// })

// res.json({ accessToken })