// Agregar tipado en javascript (hacks)
const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
  // Cuando está parseado el body podemos trabajar con json
  const { name, email, password } = req.body;
  console.log(name, email, password);

  return res.json({
    ok: true,
    msg: 'Crear usuario /new',
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;
  console.log(email, password);

  return res.json({
    ok: true,
    msg: 'Login de usuario /',
  });
};

const revalidar = (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew',
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidar,
};
