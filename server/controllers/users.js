const {createUser, getUser} = require('../models/users');

module.exports = {

    async newUser (req, res) {

        const {email, username, password, role} = req.body;
       const user = await createUser(email, username, password, role);
       res.status(201).json(user);

    },

    async findUser (req, res) {
        const user = await getUser(req.params.id);
        res.status(200).json(user)
    },


}
