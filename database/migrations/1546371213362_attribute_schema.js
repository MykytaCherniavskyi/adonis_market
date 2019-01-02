'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributeSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributeSchema
