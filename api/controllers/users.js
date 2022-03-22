/* eslint-disable linebreak-style */
const CryptoJS = require('crypto-js')

require('dotenv').config()

module.exports = app => {
	//  operador destructor
	const {existsOrError, notExistsOrError, equalsOrError } = app.models.validation // funções do arquivo validation.js

   

	const save = async (req, res) => {
		const user = { ...req.body }
        
		// validação pra saber se veio 'estring' vazia. Se for '' return
		for(let key in user){
			if(user[key] === '' || null){
				return 
			}
		}
        
		// se não for vazio passa por aqui
		console.log(user)
        
		//    if(user){
		//     app.db('use')
		//     .insert([{username: user.username, email: user.email, password: user.password}])
		//     .then(_ => _)
		//    }

		//validações
		//garantir que o user não será cadastrado como ADMIN diretamente na página /signup
		// if (!req.originalUrl.startsWith('/users')) user.admin = false // validação se não tiver com /users  ( obrigatoriamente o ADMIN será false)
		// if (!req.user || !req.user.admin) user.admin = false // validação se user n estiver logado (!req.user) || se não tiver set como ADMIN (!req.user.admin)


		// if(req.params.id) { //se o id estiver setado
		//     user.id = req.params.id
		// }
        
		try{
			existsOrError(user.username, 'Nome não informado')
			existsOrError(user.email, 'E-mail não informado')
			existsOrError(user.password, 'Senha nao informada')
			existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
			equalsOrError(user.password, user.confirmPassword, 'Senha não conferem')

		}catch(msg){
			return res.status(400).send(msg) // error lado do client
		}

		try {
			const userForm = await app.db('users')
				.where({ email: user.email }).first()
			if(!user.id){
				notExistsOrError(userForm, 'user already registered')
			}
		} catch (msg) {
			return res.status(409).json({message: `E-mail ${user.email} existente no DB`})
			//retorno do error com usuário existente (409) Conflict
		}

		user.password = CryptoJS.AES.encrypt(req.body.password, process.env.SALT_KEY).toString() // criptografando senha do usuário
		delete user.confirmPassword // deletar confirmação da senha, pq não vai ser inserida no bando de dados

    
		app.db('users')
			.insert(user) // insert do usuário
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).json({msg: 'internal error server'}))
	}


	//Description: consultar todos os usuários

	const getAllUsers = (req, res) => {
		app.db('users')
			.select('username', 'email', 'admin')
			.then(users => res.json(users))
			.catch(err => res.status(500).send(err))
	}


	//Description: editar usuário

	const updateUserId = (req, res) => {
		const user = { ...req.body }

		app.db('users')
			.update(user)
			.where({ id: user.id })
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).send(err))
	}

	//Description: selecionar por Id

	const getById = (req, res) => { 
		app.db('users')
			.where({ id: req.params.id })
		// .first()
			.select('id', 'username', 'email', 'admin')
			.then(user => res.json(user))
			.catch(err => res.status(500).send(err))
	}

	//Description: deletando por Id

	const removeById = (req, res) => {
		app.db('users')
			.where({ id: req.params.id })
			.del()
			.then(data => res.json(data))
			.catch(err => res.status(500).send(err))
	}


	return { save, getAllUsers, updateUserId, getById, removeById }

} // chave do module.exports



//prof

// const bcrypt = require('bcrypt-nodejs')

// module.exports = app => {
//      //  operador destructor
//      const {existsOrError, notExistsOrError, equalsOrError } = app.api.validation // funções do arquivo validation.js

//     // função criptografar senha   |   criptografar: reproduzir (mensagem) em código não conhecido, tornando-a, desse modo, intencionalmente ininteligível para os que não têm acesso às suas convenções.
//     const encryptPassword = password => {
//         const salt = bcrypt.genSaltSync(10)
//         return bcrypt.hashSync(password, salt)
//     }

//     const save = async (req, res) => {
//         const user = { ...req.body }

//         if(req.params.id) { //se o id estiver setado
//             user.id = req.params.id
//         }
//         try{
//             existsOrError(user.username, 'Nome não informado')
//             existsOrError(user.email, 'E-mail não informado')
//             existsOrError(user.password, 'Senha nao informada')
//             existsOrError(user.confirmPassword, 'Confirmação de senha indálida')
//             equalsOrError(user.password, user.confirmPassword, 'Senha não conferem')

//             const userFromDB = await app.db('users')
//               .where({ email: user.email }).first()
//               if(!user.id){
//                   notExistsOrError(userFromDB, 'Usuário já cadastrado')
//               }
              
//         }catch(msg){
//             return res.status(400).send(msg) // error lado do client
//         }

//         user.password = encryptPassword(req.body.password) // criptografando senha do usuário
//         delete user.confirmPassword // deletar confirmação da senha, pq não vai ser inserida no bando de dados

//         if(user.id){
//             app.db('users') // update do usuário
//                .update(user)
//                .where({ id: user.id })
//                .then(_ => res.status(204).send())
//                .catch(err => res.status(500).send(err))
//         }else{
//             app.db('users')
//                .insert(user) // insert do usuário
//                .then(_ => res.status(204).send())
//                .catch(err => res.status(500).send(err))
//         }


//     }

//     const get = (req, res) => { // get para consultar todos os usuários
//         app.db('users')
//             .select('id', 'username', 'email', 'admin')
//             .then(users => res.json(users))
//             .catch(err => res.status(500).send(err))
//     }


//     const getById = (req, res) => { // get para consultar usuários específicos
//         app.db('users')
//             .where({ id: req.params.id })
//             .select('id', 'username', 'email', 'admin')
//             .then(user => res.json(user))
//             .catch(err => res.status(500).send(err))
//     }

//     return { save, get, getById }

// chave do module.exports