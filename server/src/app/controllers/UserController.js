const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();

    response.json(users);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    //  Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton -> apenas uma instancia por controller
module.exports = new UserController();
