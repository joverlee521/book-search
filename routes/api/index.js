const router = require("express").Router();
const googleBookRoutes = require("./googleBooks");
const booksRoutes = require("./books");

// Google Book routes
router.use("/googleBooks", googleBookRoutes);
router.use("/userBooks", booksRoutes);

module.exports = router;