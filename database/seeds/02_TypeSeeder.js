/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Type = use('App/Models/Type');
const Factory = use('Factory');

class TypeSeeder {
  async run() {
    await Type.query().delete();

    const types = ['tv', 'phone', 'laptop'];
    const readyTypes = [];

    types.forEach(item => {
      readyTypes.push(Factory.model('App/Models/Type').create({ name: item }));
    });

    await Promise.all(readyTypes);
  }
}

module.exports = TypeSeeder;
