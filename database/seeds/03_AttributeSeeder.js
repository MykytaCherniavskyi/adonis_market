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
const Attribute = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const types = await Type.pair('name', 'id');

    const attr = [
      { name: 'display', type_id: types.phone },
      { name: 'keypad', type_id: types.laptop },
      { name: 'memory', type_id: types.phone },
      { name: 'wifi', type_id: types.phone },
      { name: 'processor', type_id: types.phone }
    ];

    await Attribute.createMany(attr);
  }
}

module.exports = AttributeSeeder;
