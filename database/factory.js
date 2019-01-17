/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, index, data) => {
  const name = data.name || faker.username();
  return {
    name,
    password: data.password || faker.password(),
    email: data.email || `${name}@gmail.com`
  };
});

Factory.blueprint('App/Models/Type', async (faker, index, data) => ({
  name: data.name || faker.word()
}));

Factory.blueprint('App/Models/Attribute', async (faker, index, data) => ({
  name: `${data.name}_${faker.word()}`,
  type_id: data.type_id
}));

Factory.blueprint('App/Models/Product', async (faker, index, data) => ({
  name: `${data.name}_${faker.word()}`,
  user_id: data.user_id,
  type_id: data.type_id
}));

Factory.blueprint('App/Models/ProductAttribute', async (faker, index, data) => ({
  product_id: data.product_id,
  attribute_id: data.attribute_id,
  value: faker.word()
}));
