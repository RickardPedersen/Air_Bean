const router = require('express').Router();
const {newProduct} = require('../controllers/product');


router.post('/', newProduct);

module.exports = router;