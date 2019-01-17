/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

  static get updatedAtColumn() {
    return null;
  }

  users() {
    return this.belongsTo('App/Models/User');
  }

  attribute() {
    return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/ProductAttribute');
  }

  types() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Product;
