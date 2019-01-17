const ProductAttributeModel = use('App/Models/ProductAttribute');
// const ProductModel = use('App/Models/Product');
// const Database = use('Database');

class ProductAttribute {
  static async showProdsAttr(params) {
    const { attr } = params;
    const prodAttr = await ProductAttributeModel.query()
      .where('product_id', attr)
      .fetch();

    return prodAttr;
  }

  static async showProdAttr(params) {
    const { id, attr } = params;
    const prodAttr = await ProductAttributeModel.query()
      .where('product_id', attr)
      .where('attribute_id', id)
      .fetch();
    return prodAttr;
  }

  static async storeProdAttr(request, params) {
    const { attr } = params;
    const { value, attributeId } = request.all();

    const prodAttr = new ProductAttributeModel();
    prodAttr.value = value;
    prodAttr.product_id = attr;
    prodAttr.attribute_id = attributeId;

    prodAttr.save();

    return `ProductAttribute with value - ${value} was created`;
  }

  static async updatedProdAttr(request, params) {
    const { attr, id } = params;
    const { value, productId, attributeId } = request.all();
    const prodAttributes = await ProductAttributeModel.query()
      .where('product_id', attr)
      .where('attribute_id', id)
      .fetch();

    const prodAttr = await ProductAttributeModel.findOrFail(prodAttributes.rows[0].id);

    if (prodAttr == null) {
      return 'Nothing found';
    }

    prodAttr.value = value || prodAttr.value;
    prodAttr.product_id = productId || prodAttr.product_id;
    prodAttr.attribute_id = attributeId || prodAttr.attribute_id;

    prodAttr.save();

    return `ProductAttribute with id ${id} was updated`;
  }

  static async deleteProdAttr(params) {
    const { attr, id } = params;
    const prodAttributes = await ProductAttributeModel.query()
      .where('product_id', attr)
      .where('attribute_id', id)
      .fetch();
    const prodAttr = await ProductAttributeModel.findOrFail(prodAttributes.rows[0].id);

    await prodAttr.delete();
    return `ProductAttribute with ${id} was deleted`;
  }
}

module.exports = ProductAttribute;
