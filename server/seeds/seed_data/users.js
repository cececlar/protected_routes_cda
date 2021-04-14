const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  return await bcrypt.hash(password, 8);
}

module.exports = [
  {
    first_name: 'Leo',
    last_name: 'Policastro',
    email: 'leo@gmail.com',
    phone: '123-456-7890',
    address: '123 Main St, Coral Gables, FL',
    password: hashPassword('password')
  },
  {
    first_name: 'Ernie',
    last_name: 'Hsiung',
    email: 'ernie@gmail.com',
    phone: '123-456-7890',
    address: '123 Main St, Miami, FL',
    password: hashPassword('password')
  }
];
