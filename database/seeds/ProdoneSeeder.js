'use strict'

/*
|--------------------------------------------------------------------------
| ProdoneSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Product = use('App/Models/Product')

class ProdoneSeeder {
  async run () {

    
    const types = [{ name: 'notebook' }, { name: 'phone' }, { name: 'car' }];

    await Product.createMany(types);

  }
}

module.exports = ProdoneSeeder
