/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ProductAttribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  attributes() {
    return this.belongsTo('App/Models/Attribute');
  }

  products() {
    return this.belongsTo('App/Models/Product');
  }
}

module.exports = ProductAttribute;
