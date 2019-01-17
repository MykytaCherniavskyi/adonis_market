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
const Factory = use('Factory');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const { rows: users } = await User.all();
    const { rows: types } = await Type.all();
    const prod = [];

    users.forEach(element => {
      const index = element.id;
      types.forEach(item => {
        prod.push(
          Factory.model('App/Models/Product').create({
            name: element.name,
            user_id: index,
            type_id: item.id
          })
        );
      });
    });

    await Promise.all(prod);
  }
}

module.exports = ProductSeeder;
