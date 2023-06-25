/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('plants', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('species')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('needs')
}
