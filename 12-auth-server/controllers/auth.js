// Agregar tipado en javascript (hacks)
const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const crearUsuario = async (req, res = response) => {
  // Cuando está parseado el body podemos trabajar con json
  const { name, email, password } = req.body;

  try {
    // Verificar si existe un email igual en la base de datos
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El email ya está en uso',
      });
    }

    // Crear usuario con el modelo
    usuario = new Usuario(req.body);

    // Encriptar (Hashear) la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // Generar el JWT (será enviado para que entre al sistema
    // después de registrarse - aunque es opcional - 
    // recomendado en el login)

    // Crear usuario de DB
    await usuario.save();

    // Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: usuario.id, // el id es el uid que genera mongo
      name,
      msg: 'Usuario creado exitosamente',
    });
  } catch (err) {
    // Se recomienda mostrar el error en la consola
    console.log(err);
    // Se envía un mensaje al cliente (a elección)
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

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
