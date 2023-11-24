const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const {
  validationCreateUser,
  validationLogin,
} = require('../middlewares/validations');
const users = require('./users');
const cards = require('./cards');

const NotFoundError = require('../errors/UnauthorizedError');

router.post('/signup', validationCreateUser, createUser);
router.post('/signin', validationLogin, login);

router.use(auth);

router.use('/users', users);
router.use('/cards', cards);
router.use('/*', (req, res, next) => next(new NotFoundError('страница не найдена')));

module.exports = router;
