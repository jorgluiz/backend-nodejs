module.exports = app => {
    const getAllCount = (req, res) =>{
        app.db('prontuarios')
        .count('*')
        .then( dataAll => res.json(dataAll) )
    }

    return { getAllCount }
}