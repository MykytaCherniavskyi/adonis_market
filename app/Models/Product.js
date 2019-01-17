/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  users() {
    return this.belongsTo('App/Models/User');
  }

  Attribute() {
    return this.belongsToMany('App/Models/Attribute');
  }

  types() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Product;
