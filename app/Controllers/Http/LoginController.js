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
    const { email } = request.all();
    const user = (await User.findBy('email', email)).toJSON();

    response.status(201).send(`User ${user.name} and ${user.email} loged`);
  }

  async registration({ request, response }) {
    const { name, password, email } = request.all();

    const user = new User();
    user.name = name;
    user.password = password;
    user.email = email;

    try {
      await user.save();
    } catch (e) {
      throw new Error(`User ${name} - ${email} already created`);
    }

    response.status('201').send(`User ${name} and ${email} created`);
  }
}

module.exports = LoginController;
