const {user} = require('../database/db');

module.exports = {

    async createUser() {
        try {
            await user.create()
        } catch {

        }
    },


}