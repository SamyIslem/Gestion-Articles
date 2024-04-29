const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");

const adminsController = require("../controllers/admins.controllers");
const adminsValidations = require("../validations/admins.validations");

router.post(
  "/",
  validate(adminsValidations.createAdminSchema),
  adminsController.createAdmin
);
router.get("/", adminsController.getAdmins);
router.get("/:id", adminsController.getAdmin);
router.put("/:id", adminsController.alterFirstName);

module.exports = router;
