/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken')

require('dotenv').config()


module.exports = app => {
	const VerifyToken = async (req, res, next) => {
     
		const tokenHeader = req.headers['authorization']
		const token = tokenHeader && tokenHeader.split(' ')[1]
		// console.log('vim do refresg',token)

		if (!token) return res.status(401).json({ error: 'Restricted access' })

		try {
			// decodificando token
			const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

			if(!decoded){
				res.status(401).json({ error: 'invalid token' })
			}
			const user = await app.db('users')
				.where({ id: decoded.id })
				.first()
				.then(user => user)
				.catch(err => err)

			if(user.id === decoded.id)
			// req.decoded = decoded
				next()
                    
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
	return { VerifyToken }
}




// try {
//     // decodificando token
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, userData) => {
//         if (err) {
//             return res.status(401).json({ error: "invalid token" })
//         } 
//             const userDB = await app.db('users')
//                 .where({ id: userData.id })
//                 .first()
//                 .then(userId => userId)
//                 .catch(err => err)

//             if(userDB.id === userData.id)
//             req.userData = userData
//           console.log('TÁ TUDO CERTO AQUI TOKEN')
//           next()
        
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