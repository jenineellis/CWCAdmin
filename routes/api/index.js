const router = require("express").Router();
const wineRoutes = require("./wines");
const userRoutes = require('./user');

// Wine routes
router.use("/wines", wineRoutes);

// User routes
router.use('/user', userRoutes);

module.exports = router;
