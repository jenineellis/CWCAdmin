const router = require("express").Router();
const userController = require('../../controllers/userController')

router.post("/admin", async (req, res)=>{
    userController.loginUser(req, res)
})

module.exports = router;