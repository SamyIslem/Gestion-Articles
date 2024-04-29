const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");

const articleController = require("../controllers/articles.controllers");
const articleValidation = require("../validations/articles.validation");

router.post(
  "/",
  validate(articleValidation.createArticleSchema),
  articleController.createArticle
);
router.get("/number", articleController.getTotalNumber);
router.get("/:title", articleController.getArticleByTitle);
router.get("/", articleController.getArticles);
router.delete("/", articleController.deleteArticles);
router.put("/:id",articleController.editArticle)

module.exports = router;
