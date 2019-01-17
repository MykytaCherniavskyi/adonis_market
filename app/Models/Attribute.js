/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Attribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  productAttribute() {
    return this.belongsToMany('App/Models/Product').pivotModel('App/Models/ProductAttribute');
  }

  types() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Attribute;
