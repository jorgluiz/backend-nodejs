/* eslint-disable linebreak-style */
module.exports = app => {
	const getAllPosts = (req, res) =>{
		app.db('prontuarios')
			.count('*')
			.then( dataAll => res.json(dataAll) )
	}

	return { getAllPosts }
}