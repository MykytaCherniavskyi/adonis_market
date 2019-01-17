/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');

/**
 * Resourceful controller for interacting with attributes
 */
class LoginController {
  /**
   * Show a list of all attributes.
   * GET attributes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    response.status(201).send(await User.login(request));
  }

  async registration({ request, response }) {
    response.status(201).send(await User.registration(request));
  }
}

module.exports = LoginController;
