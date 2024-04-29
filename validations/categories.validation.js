const Joi = require("joi");

const commonSchema = Joi.number().integer().min(1);

const createCategorySchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  id: commonSchema.required(),
  createdBy: commonSchema,
});

module.exports = {
  createCategorySchema,
};
