const {product} = require('../database/db');

module.exports = {
    async createProduct(title, desc, price) {
        const productObject = (
            title,
            desc,
            price
        )
        try {
            return await product.create(productObject);
        } catch (error) {
            console.error(error);
        }
    }
}