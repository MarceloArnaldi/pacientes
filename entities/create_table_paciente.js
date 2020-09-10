// use esse modelo para atualizar o arquivo homônimo na pasta "migrations"
exports.up = function(knex, Promise) {
    return knex.schema.createTable('paciente', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('idade').notNull()        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('paciente')
};
