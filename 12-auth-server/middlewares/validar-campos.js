const { response } = require('express');
const { validationResult } = require('express-validator');

// Verificar si existen errores al realizar las validaciones
const validarCampos = (req, res = response, next) => {
  // Verificamos si existen errores (express-validator)
  const errors = validationResult(req);
  // Enviamos los errores si existen
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports = {
  validarCampos,
};
