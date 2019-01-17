/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'OK', version: '1.0.0' }));

Route.group(() => {
  Route.post('/login', 'LoginController.index');
  Route.post('/registration', 'LoginController.registration');
  Route.resource('/products', 'ProductsController');
  Route.resource('/products/:attr/attributes', 'ProductAttributeController');
  Route.resource('/types', 'TypesController');
}).prefix('api');
