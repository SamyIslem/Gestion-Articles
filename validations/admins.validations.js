const Joi = require("joi");

const createAdminSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  createdby: Joi.number().integer().min(1),
});

module.exports = { createAdminSchema };
