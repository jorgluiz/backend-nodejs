const admin = require('../controllers/admin.js')

module.exports = app => {
    app.post('/auth/signin', app.controllers.authenticateUser.signin)
    app.post('/auth/signup', app.controllers.users.save)
    app.post('/auth/refresh-token', app.controllers.checkerToken.VerifyToken, app.controllers.refreshToken.refresh)


    // crud USERS
    app.route('/users/:id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(admin(app.controllers.users.getById))

    app.route('/users')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.users.getAllUsers)

    app.route('/users')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .post(app.controllers.users.save)

    app.route('/users/:id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .put(app.controllers.users.updateUserId)


    app.route('/users/:id')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .delete(app.controllers.users.removeById)



    // crud PRONTUARIOS
    app.route('/prontuarios/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.filings.getByCpf)


    app.route('/prontuarios')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .post(app.controllers.filings.saveFile)


    app.route('/prontuarios/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .put(app.controllers.filings.updataFile)


    app.route('/prontuarios/buscas/:cpf')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .delete(app.controllers.filings.removeByCpf)


    // total de prontuarios existente
    app.route('/allcount')
        .all(app.controllers.checkerToken.VerifyToken)   // checkerToken ### 
        .get(app.controllers.allCount.getAllCount)
}