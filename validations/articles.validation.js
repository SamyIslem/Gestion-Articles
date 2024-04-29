const Joi = require("joi");

const createArticleSchema = Joi.object({
  titre: Joi.string().alphanum().min(5).max(25).required(),
  contenu: Joi.string().alphanum().min(5).max(25).required(),
  id_categorie: Joi.number().greater(0),
});

module.exports = {
  createArticleSchema,
};
