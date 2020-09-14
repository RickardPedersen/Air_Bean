const router = require('express').Router();
const {newUser} = require('../controllers/users');

router.post('/', newUser);

module.exports = router;