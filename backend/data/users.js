import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'user',
    email: 'user1@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
