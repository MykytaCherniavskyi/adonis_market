/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class MiddleTest {
  async handle({ request }, next) {
    console.log('middleware working');
    await next();
  }
}

module.exports = MiddleTest;
