const express = require('express');

const router = express.Router();
const cards = require('../controllers/cards');
const {
  validationCreateCard,
  validationCardId,
} = require('../middlewares/validations');

router.get('/', cards.getAllCards);
router.post('/', validationCreateCard, cards.createCard);
router.delete('/:cardId', validationCardId, cards.deleteCard);
router.put('/:cardId/likes', validationCardId, cards.likeCard);
router.delete('/:cardId/likes', validationCardId, cards.unlikeCard);

module.exports = router;
