/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = app => {

	const refresh = async (req, res, next) => {

		const tokenHeader = req.headers['authorization']
		const token = tokenHeader && tokenHeader.split(' ')[1]
		// console.log('sou o refresh', token)


		// fn generatorToken
		function generateAccessToken(user) {
			return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '72h' })
		}

		try {
			jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, userData) => {
				// console.log(userData)
				if (err) {
					return res.status(401).json({ error: 'invalid' })
				}
				const userDB = await app.db('users')
					.where({ id: userData.id }) // buscando o id onde id é igual do decoded.id
					.first()
					.then(userId => userId)
					.catch(err => err)

				if (userDB.id !== userData.id) {
					return res.status(401).json({ error: 'token invalid' })
				}

				delete userData.iat
				delete userData.exp

				const { admin } = userData.payload

				const accessToken = generateAccessToken(userData)
				// console.log('ESSE É NOVO token')
				// req.accessToken = accessToken
				res.json({accessToken, admin: admin})
			})
		} catch (error) {
			if (error) return res.status(401).json({
				error: [
					{
						msg: 'Invalid Token'
					}
				]
			})
		}
	}

	return { refresh }
}




// function generateAccessToken(user) {
//     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });
// }

// try {
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, userData) => {
//         if (err) {
//             return res.status(401).json({ error: "invalid" })
//         }
//         const userDB = await app.db('users')
//             .where({ id: userData.id }) // buscando o id onde id é igual do decoded.id
//             .first()
//             .then(userId => userId)
//             .catch(err => err)

//         if (userDB.id !== userData.id){
//             return res.status(401).json({error: "token invalid"})
//         }

//         delete userData.iat
//         delete userData.exp
//         const refreshedToken = generateAccessToken(userData)
//         console.log('ESSE É NOVO token')
//         res.json({ refreshedToken: refreshedToken })
//     })
// } catch (error) {
//     if (error) return res.status(401).json({
//         error: [
//             {
//                 msg: "Invalid Token"
//             }
//         ]
//     })
// }