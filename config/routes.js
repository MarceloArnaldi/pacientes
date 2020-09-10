module.exports = app => {

    app.route('/pacientes')
        .get(app.api.pacientes.get)
        
}