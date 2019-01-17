/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User');
const Factory = use('Factory');

class UserSeeder {
  async run() {
    await User.query().delete();

    await Factory.model('App/Models/User').create({ name: 'admin', password: 'admin', email: 'admin@gmail.com' });
    await Factory.model('App/Models/User').create({ name: 'nikita', password: 'admin2' });
  }
}

module.exports = UserSeeder;
