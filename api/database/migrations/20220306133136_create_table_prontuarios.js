
exports.up = function(knex) {
    return knex.schema.createTable('prontuarios', table => {
        table.string('name').notNullable() // 'string' tem um tamanho padrao de caracteres(255) / 'name' não nulo
        table.string('nascimento').notNullable()
        table.string('sexo').notNullable()
        table.string('mae').notNullable()
        table.string('sus').notNullable()
        table.string('cpf').primary().notNullable()
        table.string('rg').notNullable().unique()
        table.string('uf').notNullable()
        table.string('dataemissao').notNullable()
        table.string('endereco').notNullable()
        table.string('bairro').notNullable()
        table.string('cidade').notNullable()
        table.string('cep').notNullable()
        table.string('fone').notNullable()
        table.string('descricao', 10000).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('prontuarios')
};
