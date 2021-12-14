const { uuid } = require('uuidv4');

const users = [
  {
    id: uuid(),
    name: 'Marcus Rosa',
    email: 'marcus@gmail.com',
  },
];

class UsersRepository {
  findAll() {
    return new Promise((resolve) => resolve(users));
  }
}

module.exports = new UsersRepository();
