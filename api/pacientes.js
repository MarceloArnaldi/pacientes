module.exports = app => {

    const get = (req, res) => {
        app.db('paciente')
            .select('id', 'nome', 'idade')            
            .then(paciente => res.json(paciente))
            .catch(err => res.status(500).send(err))
    }

    return { get }

}