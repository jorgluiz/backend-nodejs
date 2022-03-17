
exports.up = async function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary().notNull()
        table.string('username').notNull() // 'string' character varying(255) / 'name' não nulo
        table.string('email').unique().notNull() // email (unique) não pode existir outro com mesmo nome
        table.string('password', 1000).notNull()
        table.boolean('admin').defaultTo(false).notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
