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

class UserSeeder {
  async run() {
    await User.query().delete();

    const users = [{ name: 'admin' }, { name: 'nikita' }];

    await User.createMany(users);
  }
}

module.exports = UserSeeder;
