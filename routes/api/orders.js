const router = require('express').Router();
const userController = require('../../controllers/userController')

router.post('/user', async (req, res) => {
    orderController.getAll(req, res)
})

module.exports = router;
