/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  users() {
    return this.belongsTo('App/Models/User');
  }

  productAttribute() {
    return this.hasMany('App/Models/ProductAttribute');
  }

  types() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Product;
