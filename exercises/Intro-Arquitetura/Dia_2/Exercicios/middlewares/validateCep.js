const validateCep = (req, res, next) => {
  const { cep } = req.params;
  const regexPatternForCep = /\d{5}-?\d{3}/;
  if (!regexPatternForCep.exec(cep))
    return res
      .status(400)
      .json({ error: { code: "invalidData", message: "CEP inválido" } });

  next();
};

module.exports = { validateCep };
