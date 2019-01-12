/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Type extends Model {
  attributes() {
    return this.hasMany('App/Models/Attribute');
  }

  products() {
    return this.hasMany('App/Models/Product');
  }
}

module.exports = Type;
