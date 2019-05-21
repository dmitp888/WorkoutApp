const router = require("express").Router();
const eRoutes = require("./exersizes");

// Book routes
router.use("/", eRoutes);

module.exports = router;