const express = require('express');

const router = express.Router();
const cards = require('../controllers/cards');
const {
  validationCreateCard,
  validationCardId,
} = require('../middlewares/validations');

router.get('/', cards.getAllCards);
router.post('/', validationCreateCard, cards.createCard);
router.delete('/:id', validationCardId, cards.deleteCard);
router.put('/:id/likes', validationCardId, cards.likeCard);
router.delete('/:id/likes', validationCardId, cards.unlikeCard);

module.exports = router;
