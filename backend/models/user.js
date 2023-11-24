const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь океана',
  },
  avatar: {
    type: String,
    default: 'https://laplaya-rus.ru/wp-content/uploads/2/8/5/285ac848bbbb168f9a318dc114eb4fe6.jpeg',
    validate: {
      validator: (value) => validator.isURL(value),
      message: 'Неверная ссылка на аватар',
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'неверный адрес элетронной почты',
    },
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
}, {
  versionKey: false,
});

userSchema.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user) {
    throw new UnauthorizedError('Неправильная почта или пароль');
  }
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    throw new UnauthorizedError('Неправильная почта или пароль');
  }
  return user;
};

const User = mongoose.model('user', userSchema);
module.exports = User;
