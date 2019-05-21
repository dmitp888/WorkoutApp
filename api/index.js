const router = require("express").Router();
const exersizeRoutes = require("./exersizes");

// Book routes
router.use("/workout", exersizeRoutes);

module.exports = router;
