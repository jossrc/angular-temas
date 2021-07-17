// Agregar tipado en javascript (hacks)
const { response } = require('express');

const crearUsuario = (req, res = response) => {
  return res.json({
    ok: true,
    msg: 'Crear usuario /new',
  });
};

const loginUsuario = (req, res) => {
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
