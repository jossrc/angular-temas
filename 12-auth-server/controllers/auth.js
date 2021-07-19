// Agregar tipado en javascript (hacks)
const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

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
    const token = await generarJWT(usuario.id, name);

    // Crear usuario de DB
    await usuario.save();

    // Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: usuario.id, // el id es el uid que genera mongo
      name,
      email,
      token,
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

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const dbUser = await Usuario.findOne({ email });

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo no existe (Usuario no encontrado)',
      });
    }

    // Confirmar si el password hace match
    const validPassword = bcrypt.compareSync(password, dbUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto',
      });
    }

    // Generar el JWT
    const token = await generarJWT(dbUser.id, dbUser.name);

    // Respuesta del servicio
    return res.status(200).json({
      ok: true,
      uid: dbUser.id, // el id es el uid que genera mongo
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const revalidar = async (req, res = response) => {
  // Obtenemos el uid y el name de la request (enviada
  // por el middleware validar-jwt)
  const { uid } = req;

  // Leer la base de datos
  const dbUser = await Usuario.findById(uid);

  // Generamos un nuevo token
  const nuevoToken = await generarJWT(uid, dbUser.name);

  return res.json({
    ok: true,
    uid,
    name: dbUser.name,
    email: dbUser.email,
    token: nuevoToken
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidar,
};
