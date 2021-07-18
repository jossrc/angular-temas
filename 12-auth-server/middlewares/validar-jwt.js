const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
  // El token por lo general viene por el header
  const token = req.header('x-token'); // header personalizado

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no encontrado - error',
    });
  }

  try {
    // Comprobamos si el token es válido
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED); // Retorna el payload

    // usamos la request para enviar datos (GLOBAL)
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
    });
  }

  // Todo ok
  next();
};

module.exports = {
  validarJWT,
};
