const {createProduct} = require('../models/product');

module.exports = {

    async newProduct (req, res) {
        const {title, desc, price} = req.body;
        let product = await createProduct(title, desc, price);
        res.status(201).json(product);
    }

}