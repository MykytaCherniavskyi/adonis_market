/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProductAttribute = use('App/Models/ProductAttribute');

/**
 * Resourceful controller for interacting with productattributes
 */
class ProductAttributeController {
  /**
   * Show a list of all productattributes.
   * GET productattributes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response, params }) {
    response.json(await ProductAttribute.showProdsAttr(params));
  }

  /**
   * Create/save a new productattribute.
   * POST productattributes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    response.json(await ProductAttribute.storeProdAttr(request, params));
  }

  /**
   * Display a single productattribute.
   * GET productattributes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    response.json(await ProductAttribute.showProdAttr(params));
  }

  /**
   * Update productattribute details.
   * PUT or PATCH productattributes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    response.json(await ProductAttribute.updatedProdAttr(request, params));
  }

  /**
   * Delete a productattribute with id.
   * DELETE productattributes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    response.json(await ProductAttribute.deleteProdAttr(params));
  }
}

module.exports = ProductAttributeController;
