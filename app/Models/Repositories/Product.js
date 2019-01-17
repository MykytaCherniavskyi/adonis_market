const ProductModel = use('App/Models/Product');
const Database = use('Database');

class Product {
  static async showProducts(request) {
    const { type = null, name = null, user = null, price = null, date = null } = request.all();

    const db = Database.table('products');

    if (type) {
      db.where('type_id', type);
    }
    if (name) {
      db.where('name', name);
    }
    if (user) {
      db.where('user_id', user);
    }
    if (price) {
      db.orderBy('price');
    }
    if (date) {
      db.orderBy('created_at');
    }

    return db;
  }

  static async singleProduct(params) {
    const { id } = params;
    const prod = await ProductModel.findOrFail(id);
    return prod;
  }

  static async storeProduct(request) {
    const { name, userId, typeId, price } = request.all();
    const prod = new ProductModel();
    prod.name = name;
    prod.user_id = userId;
    prod.type_id = typeId;
    // prod.price = price;

    prod.save();

    return `Prodcut ${name} - added to database`;
  }

  static async updatedProduct(params, request) {
    const { id } = params;
    const { name, userId, typeId } = request.all();
    const type = await ProductModel.find(id);

    if (type == null) {
      return 'Nothing found';
    }

    type.name = name || type.name;
    type.user_id = userId || type.user_id;
    type.type_id = typeId || type.type_id;

    type.save();

    return `Type with id ${id} was updated`;
  }

  static async deleteProduct(params) {
    const { id } = params;
    const prod = await ProductModel.findOrFail(id);

    await prod.delete();
    return `Type with ${id} was deleted`;
  }
}

module.exports = Product;
