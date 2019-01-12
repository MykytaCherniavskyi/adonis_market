/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ProductAttribute extends Model {
  attributes() {
    return this.belongsTo('App/Models/Attribute');
  }

  products() {
    return this.belongsTo('App/Models/Product');
  }
}

module.exports = ProductAttribute;
