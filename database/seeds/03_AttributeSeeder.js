'use strict'

/*
|--------------------------------------------------------------------------
| AttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Attribute = use('App/Models/Attribute')

class AttributeSeeder {
  async run () {
    await Attribute.query().delete()

    const attr = [
      { name: 'display'},
      { name: 'keypad'},
      { name: 'memory'},
      { name: 'wifi'},
      { name: 'processor'}
    ]

    await Attribute.createMany(attr)
  }
}

module.exports = AttributeSeeder
