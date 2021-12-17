const { v4 } = require('uuid');

const users = [
  {
    id: v4(),
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
