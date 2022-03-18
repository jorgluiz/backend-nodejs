const admin = require('../controllers/admin.js')

module.exports = app => {
    app.post('/auth/signin', app.controllers.authenticateUser.signin)
    app.post('/auth/signup', app.controllers.users.save)
    app.post('/auth/refresh-token', app.controllers.checkerToken.VerifyToken, app.controllers.refreshToken.refresh)


    // crud Cleint
    app.route('/cleint/id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.users.getById)

    app.route('/cleint')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.users.getAllUsers)

    app.route('/cleint')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .post(app.controllers.users.save)

    app.route('/cleint/id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .put(app.controllers.users.updateUserId)


    app.route('/cleint/id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .delete(app.controllers.users.removeById)



    // crud PRONTUARIOS
    app.route('/posts/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.filings.getByCpf)


    app.route('/posts')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .post(app.controllers.filings.saveFile)


    app.route('/posts/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .put(app.controllers.filings.updataFile)


    app.route('/posts/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .delete(app.controllers.filings.removeByCpf)


    // total de prontuarios existente
    app.route('/allposts')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.allCount.getAllPosts)
}