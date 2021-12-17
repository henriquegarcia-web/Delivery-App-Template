const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async login(request, response) {
    const userLogged = await UsersRepository.findAll();
    response.json(userLogged);
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
