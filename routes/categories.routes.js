const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");

const categoryController = require("../controllers/categories.controllers");
const categoryValidation = require("../validations/categories.validation");

router.post(
  "/",
  validate(categoryValidation.createCategorySchema),
  categoryController.createCategory
);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.delete("/:id",categoryController.deleteCategory)

module.exports = router;
