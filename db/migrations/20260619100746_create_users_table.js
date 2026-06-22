/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name',100).notNullable();
        table.string('email',100).notNullable().unique();
        table.string('password',100).notNullable();
        table.string('phone', 15).notNullable();
        table.boolean('is_admin').notNullable().defaultTo(false);
        table.boolean('is_active').notNullable().defaultTo(true);
        table.string('address',100).notNullable();
        table.specificType('image', 'MEDIUMBLOB').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable();
    })
};  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
