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
const Route = use('Route')
const Database = use('Database')
const Product = use('App/Models/Product')

Route.get('/', () => ({ status: 'OK', version: '1.0.0'}))

Route.group('non-login-routes', () => {
    Route.get('/login', 'AuthController.index')
    Route.post('/login', 'AuthController.login').middleware(['quest'])
})

Route.group('non-register-routes', () => {
    Route.get('/registration', 'AuthController.registrationPage')
    Route.post('/registration', 'AuthController.registartion')
})

Route.post('/db', async () => {
    return await Database.table('products').select('*').where('id','=','2')
})
