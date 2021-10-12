const Joi = require("joi");

const schemaCep = Joi.object({
  cep: Joi.string().pattern(new RegExp(/\d{5}-?\d{3}/)).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().max(2).required()
});

const validateSchema = (req, res, next) =>{
  const validSchema = schemaCep.validate(req.body);
  if (validSchema.error) return res.status(400).json({ "error": { "code": "invalidData", "message": validSchema.error.message } })
  next();
}

module.exports = { validateSchema };

