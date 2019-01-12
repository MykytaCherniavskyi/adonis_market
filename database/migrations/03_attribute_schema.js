/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AttributeSchema extends Schema {
  up() {
    this.create('attributes', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('type_id').notNullable();

      table
        .foreign('type_id')
        .references('id')
        .inTable('types');
      table.timestamps();
    });
  }

  down() {
    this.drop('attributes');
  }
}

module.exports = AttributeSchema;
