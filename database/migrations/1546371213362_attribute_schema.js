'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributeSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('type_id').unsigned().notNullable()

      table.foreign('type_id').references('id').on('types')
    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributeSchema
