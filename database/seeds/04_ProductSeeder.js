'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Attribute = use('App/Models/Attribute')
const User = use('App/Models/User')
const Type = use('App/Models/Type')

class ProductSeeder {
  async run () {
    await Attribute.query().delete()

    const users = await User.pair('id','name')
    const types = await Type.pair('id','name')

    const products = [
      { name: 'Galaxy Note 10', user_id: users.admin, type_id: types.phone},
      { name: 'Pixel 2XL', user_id: users.admin, type_id: types.phone},
      { name: 'Dell Latitude', user_id: users.admin, type_id: types.laptop},
      { name: 'Samsung HQL2', user_id: user_admin, type_id: types.tv}
    ]

    await Attribute.createMany(products)
  }
}

module.exports = ProductSeeder
