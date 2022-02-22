const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});
module.exports = { schemaContacts };
