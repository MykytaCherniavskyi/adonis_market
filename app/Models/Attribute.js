/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Attribute extends Model {
  productAttribute() {
    return this.belongsToMany('App/Models/Product');
  }

  types() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Attribute;
