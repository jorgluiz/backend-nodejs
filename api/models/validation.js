module.exports = app => {
	// regra da função se existir ok
	// se existir o fluxo segue normal, agora se não existir 'error'

	function existsOrError(value, msg) { // verificar se um determinado campo do banco de dados foi preenchido
		// se valor não existir ='error'
		if (!value) throw msg
		// se existir um array     / se o array for '0' ='error'
		if (Array.isArray(value) && value.length === 0) throw msg
		// se type for string  / se string tiver vazia  ='error'  
		if (typeof value === 'string' && !value.trim()) throw msg // value = ' ' ||  !value.trim()); // retorna true
	}



	//regra da função se não existir ok
	// se não existir o fluxo segue normal / agora se existir 'error'

	function notExistsOrError(value, msg) {  // verefica se o usuário já está cadastrado 
		try {
			existsOrError(value, msg)
		} catch (msg) {
			return
		}
		throw msg
	}


	function equalsOrError(valueA, valueB, msg) { // função para comparar senha e confirmação de senha
		if (valueA !== valueB) throw msg
	}

	// retorna dentro de um obj {} para depois fazer um  destructor ex:  const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation
	return { existsOrError, notExistsOrError, equalsOrError }

}