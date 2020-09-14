const router = require('express').Router();
const {newUser, findUser} = require('../controllers/users');

router.post('/', newUser);
router.get('/:id', findUser);

module.exports = router;