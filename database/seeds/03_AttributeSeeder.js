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
const Factory = use('Factory');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const { rows: types } = await Type.all();
    const attrs = [];

    types.forEach((element, i) => {
      const index = types[i].id;
      attrs.push(
        Factory.model('App/Models/Attribute').createMany(2, {
          name: element.name,
          type_id: index
        })
      );
    });

    await Promise.all(attrs);
  }
}

module.exports = AttributeSeeder;
