const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const { Conflict } = require('http-errors');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`${email} in use`);
  }

  const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email: newUser.email,
        name: newUser.name,
      },
    },
  });
};

module.exports = register;
