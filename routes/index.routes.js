const express = require("express");
const router = express.Router();

const adminsRoutes = require("./admins.routes");
const articlesRoutes = require("./articles.routes");
const categoriesRoutes = require("./categories.routes");

router.use("/admins", adminsRoutes);
router.use("/articles", articlesRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
