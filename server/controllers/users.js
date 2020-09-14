const {createUser} = require('../models/users');

module.exports = {

    async newUser (req, res) {

        const {email, username, password, role} = req.body;
       const user = await createUser(email, username, password, role);
       res.status(200).json(user);

    }

}
