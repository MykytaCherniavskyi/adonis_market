'use strict'

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
const Factory = use('Factory')
const ProductAttribute = use('App/Models/ProductAttribute')
const Product = use('App/Models/Product')
const Attribute = use('App/Models/Attribute')

class ProductAttributeSeeder {
  async run () {
    await ProductAttribute.query().delete()

    const galaxy = await Product.findBy('name','Galaxy Note 10')
    const attribute = await Attribute.pair('id','name')

    const prodAttr = [
      { product_id: galaxy.id, attribute_id: attribute.display, value: '6.0'},
      { product_id: galaxy.id, attribute_id: attribute.keypad, value: 'no'},
      { product_id: galaxy.id, attribute_id: attribute.memory, value: '4'},
      { product_id: galaxy.id, attribute_id: attribute.wifi, value: 'yes'},
      { product_id: galaxy.id, attribute_id: attribute.proccessor, value: 'Qualcomm snapdragon'},
    ]

    await ProductAttribute.createMany(prodAttr)
  }
}

module.exports = ProductAttributeSeeder
