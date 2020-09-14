const {user} = require('../database/db');

module.exports = {

    async createUser(email, username, password, role) {
        let userObject = {
            email,
            username,
            password,
            role
        };

        try {
            return await user.create(userObject)
        } catch (error) {
            console.error(error)
        }
    },

}