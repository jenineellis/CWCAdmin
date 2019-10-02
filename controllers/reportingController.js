const User = require('../models/user')

module.exports = {
    getProducer: async function (req, res) {
        console.log("API")
        try {
            const dbData = await User.find({ userType: "Producer" });
            res.json(dbData);

        } catch (error) {
            res.send(error)
        }
    },
}

