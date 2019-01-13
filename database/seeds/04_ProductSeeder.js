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
const Product = use('App/Models/Product');
const User = use('App/Models/User');
const Type = use('App/Models/Type');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const users = await User.pair('name', 'id');
    const types = await Type.pair('name', 'id');

    const products = [
      { name: 'Galaxy Note 10', user_id: users.admin, type_id: types.phone },
      { name: 'Pixel 2XL', user_id: users.admin, type_id: types.phone },
      { name: 'Dell Latitude', user_id: users.admin, type_id: types.laptop },
      { name: 'Samsung HQL2', user_id: users.admin, type_id: types.tv }
    ];

    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
