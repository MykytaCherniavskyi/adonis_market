/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductAttributeSchema extends Schema {
  up() {
    this.create('product_attributes', table => {
      table.increments();
      table.string('value').notNullable();
      table
        .integer('product_id')
        .unsigned()
        .notNullable();
      table
        .integer('attribute_id')
        .unsigned()
        .notNullable();
      table.timestamps();

      table
        .foreign('product_id')
        .references('id')
        .inTable('products');
      table
        .foreign('attribute_id')
        .references('id')
        .inTable('attributes');
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAttributeSchema;
