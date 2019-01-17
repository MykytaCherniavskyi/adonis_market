const UserModel = use('App/Models/User');

class User {
  static async login(request) {
    try {
      const { email, name } = request.all();
      const { name: userName } = (await UserModel.findByOrFail('name', name)).toJSON();
      const { email: userEmail } = (await UserModel.findByOrFail('email', email)).toJSON();

      return `User ${userName} with email - ${userEmail} loged`;
    } catch (e) {
      throw new Error('invalid username or email');
    }
  }

  static async registration(request) {
    const { name, password, email } = request.all();

    const user = new UserModel();
    user.name = name;
    user.password = password;
    user.email = email;

    try {
      await user.save();
    } catch (e) {
      throw new Error(`User ${name} - ${email} already created`);
    }

    return `User ${name} and ${email} created`;
  }
}

module.exports = User;
