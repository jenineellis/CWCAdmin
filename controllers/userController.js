const User = require('../models/user')

module.exports = {
    // Create a new User
    createUser: async function (req, res) {
        try {
            const newUser = await User.create(req.body)
            res.send(newUser);
        } catch (error) {
            console.log(error.message)
            res.send(error)
        }
    },

    // Authenticate User
    loginUser: async function (req, res) {
        try {
            const dbData = await User.findOne({ email: req.body.email, userType: 'Admin' });
            if (!dbData) {
                throw 'No Admin Found'
            }
            if (!dbData.checkPassword(req.body.password)) {
                throw 'Incorrect password'
            }
            console.log(dbData)
            res.json({
                _id: dbData._id,
                email: dbData.email,
                userType: dbData.userType
            })
        } catch (error) {
            res.send(error)
        }
    },

    // Update User
    updateUser: async function (req, res) {
        try {
            const dbData = await User.findOneAndUpdate({ email: req.body.email });
            res.send(User)
            if (!dbData) {
                throw 'Error had occurred, please refresh and try again'
            }
        } catch (error) {
            res.send(error)
        }
        // ,

        // Delete User
        // deleteAdmin: async function (req, res) {
        //     try {

    }
}
