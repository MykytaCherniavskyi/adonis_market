/*
|--------------------------------------------------------------------------
| ProductAttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ProductAttribute = use('App/Models/ProductAttribute');
const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');

class ProductAttributeSeeder {
  async run() {
    await ProductAttribute.query().delete();

    const galaxy = await Product.findBy('name', 'Galaxy Note 10');
    const attributes = (await Attribute.all()).toJSON();

    const prodAttr = [
      { product_id: galaxy.id, attribute_id: attributes[0].id, value: '6.0' },
      { product_id: galaxy.id, attribute_id: attributes[1].id, value: 'no' },
      { product_id: galaxy.id, attribute_id: attributes[2].id, value: '4' },
      { product_id: galaxy.id, attribute_id: attributes[3].id, value: 'yes' },
      { product_id: galaxy.id, attribute_id: attributes[4].id, value: 'Qualcomm snapdragon' }
    ];

    await ProductAttribute.createMany(prodAttr);
  }
}

module.exports = ProductAttributeSeeder;
