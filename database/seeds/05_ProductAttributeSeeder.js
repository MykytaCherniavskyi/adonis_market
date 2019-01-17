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
const Factory = use('Factory');

class ProductAttributeSeeder {
  async run() {
    await ProductAttribute.query().delete();

    const { rows: products } = await Product.all();
    const { rows: attributes } = await Attribute.all();
    const prodAttrMain = [];

    products.forEach(element => {
      const index = element.id;
      const prodAttr = [];
      attributes
        .filter(attr => element.type_id === attr.type_id)
        .forEach(item => {
          prodAttr.push(
            Factory.model('App/Models/ProductAttribute').create({
              product_id: index,
              attribute_id: item.id
            })
          );
        });
      prodAttrMain.push(prodAttr);
    });

    await Promise.all(prodAttrMain);
  }
}

module.exports = ProductAttributeSeeder;
