/* eslint-disable linebreak-style */
module.exports = app => {

	const { existsOrError, notExistsOrError } = app.models.validation

	// Description: Salvar formulário
	const saveFile = async (req, res) => {
		const form = { ...req.body }
		console.log(form)

		// if (req.params.cpf) { //se o cpf estiver setado
		// 	form.cpf = req.params.cpf
		// }

		try {
			existsOrError(form.name, 'Nome completo  não informado')
			existsOrError(form.nascimento, 'Data de nascimento não informado')
			existsOrError(form.sexo, 'Sexo não informado')
			existsOrError(form.mae, 'Nome da Mãe não informado')
			existsOrError(form.sus, 'Número do SUS não informado')
			existsOrError(form.cpf, 'CPF não informado')
			existsOrError(form.rg, 'RG não informado')
			existsOrError(form.uf, 'UF não informado')
			existsOrError(form.dataemissao, 'Data de emissão não informado')
			existsOrError(form.endereco, 'Endereço não informado')
			existsOrError(form.bairro, 'Bairro não informado')
			existsOrError(form.cidade, 'Cidade não informado')
			existsOrError(form.cep, 'CEP não informado')
			existsOrError(form.fone, 'Fone não informado')
			existsOrError(form.descricao, 'Observação não informado')


			if (form.rg) {
				const formCPF = await app.db('prontuarios') //selecionar tabela 'prontuarios'
					.where({ cpf: form.cpf }).first()   // selecionar coluna CPF onde CPF é = CPF
				notExistsOrError(formCPF, 'cpf já cadastrado') // verificar CPF existe


				const formRG = await app.db('prontuarios')
					.where({ rg: form.rg }).first()
				notExistsOrError(formRG, 'rg já cadastrado')
			}


		} catch (msg) {
			return res.status(400).send(msg) // error lado do client
		}

		app.db('prontuarios')
			.insert(form)   //Description:  insert do usuário
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).send(err))

	}

	//Description: consultar formulário por CPF
	const getByCpf = (req, res) => {
		app.db('prontuarios')
			.where({ cpf: req.params.cpf })
			.first()
			.select('name', 'nascimento', 'sexo', 'mae', 'sus', 'cpf', 'rg', 'uf', 'dataemissao', 'endereco', 'bairro', 'cidade', 'cep', 'fone', 'descricao')
			.then(data => res.json(data))
			.catch(err => res.status(500).send(err))
	}

	//Description: editar formulário
	const updataFile = (req, res) => {
		const form = { ...req.body }
		app.db('prontuarios') // updataForm
			.update(form)
			.where({ cpf: req.params.cpf })
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).send(err)) //error servidor
			//retorno de error (cleint = 415)
	}


	//Description: remover formulário 
	const removeByCpf = (req, res) => {
		app.db('prontuarios')
			.where({ cpf: req.params.cpf })
			.del()
			.then(data => res.json(data))
			.catch(err => res.status(500).send(err))
	}


	return { saveFile, getByCpf, updataFile, removeByCpf }
} 


// Description:  obter all prontuários

// const getAllProntuarios = (req, res) => {
// 	app.db('prontuarios')
// 		.select('namefull', 'nameMae', 'sus', 'cpf', 'dataNacimento', 'sexo', 'rg', 'uf', 'dataEmissao', 'endereco', 'bairro', 'cidade', 'cep', 'fone', 'obs').first()
// 		.then(prontuarios => res.json(prontuarios))
// 		.catch(err => res.status(500).send(err))
// }

