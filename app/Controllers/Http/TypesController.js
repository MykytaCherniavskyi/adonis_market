/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Type = use('App/Models/Type');

/**
 * Resourceful controller for interacting with types
 */
class TypesController {
  /**
   * Show a list of all types.
   * GET types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    const types = await Type.all();
    response.status(200).json(types);
  }

  /**
   * Create/save a new type.
   * POST types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name } = request.all();

    const type = new Type();
    type.name = name;

    try {
      await type.save();
    } catch (e) {
      throw new Error(`Type ${name} already created`);
    }

    response.status('201').send(`Type ${name} created`);
  }

  /**
   * Display a single type.
   * GET types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const { id } = params;
    const type = await Type.find(id);
    if (type == null) {
      response.status(404).send('Nothing found');
      return;
    }

    response.status(200).json(type);
  }

  /**
   * Update type details.
   * PUT or PATCH types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name } = request.all();
    const type = await Type.find(id);

    if (type == null) {
      response.status(404).send('Nothing found');
      return;
    }

    type.name = name;
    type.save();

    response.status(200).json(type);
  }

  /**
   * Delete a type with id.
   * DELETE types/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const { id } = params;
    const user = await Type.find(id);

    await user.delete();
    response.send('Type deleted');
  }
}

module.exports = TypesController;
