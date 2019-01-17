const TypeModel = use('App/Models/Type');

class Type {
  static async showTypes() {
    const types = await TypeModel.all();
    return types;
  }

  static async storeType(request) {
    const { name } = request.all();

    const type = new TypeModel();
    type.name = name;

    try {
      await type.save();
    } catch (e) {
      throw new Error(`Type ${name} already created`);
    }

    return `Type ${name} created`;
  }

  static async singleType(params) {
    const { id } = params;
    const type = await TypeModel.find(id);
    if (type == null) {
      return 'Nothing found';
    }

    return type;
  }

  static async updateType(params, request) {
    const { id } = params;
    const { name } = request.all();
    const type = await TypeModel.find(id);

    if (type == null) {
      return 'Nothing found';
    }

    type.name = name;
    type.save();

    return `Type with id ${id} was updated name to ${name}`;
  }

  static async destroyType(params) {
    const { id } = params;
    const user = await TypeModel.findOrFail(id);

    await user.delete();
    return `Type with ${id} was deleted`;
  }
}

module.exports = Type;
