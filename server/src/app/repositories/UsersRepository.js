const { v4 } = require('uuid');

const db = require('../../database');

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

  async create({
    name, email, phone, category_id,
  }) {
    const row = await db.query('INSERT INTO ');
  }
}

module.exports = new UsersRepository();
