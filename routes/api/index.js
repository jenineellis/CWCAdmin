const router = require("express").Router();
const bookRoutes = require("./books");
const wineRoutes = require("./wines");
const wineRoutes = require('./user');

// Book routes
router.use("/books", bookRoutes);

// Wine routes
router.use("/wines", wineRoutes);

// User routes
router.use('/user', userRoutes);

module.exports = router;
