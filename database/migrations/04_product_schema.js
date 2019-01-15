/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .integer('user_id')
        .unsigned()
        .notNullable();
      table
        .integer('type_id')
        .unsigned()
        .notNullable();
      table.timestamp('created_at').defaultTo(this.fn.now());

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table
        .foreign('type_id')
        .references('id')
        .inTable('types')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductsSchema;
