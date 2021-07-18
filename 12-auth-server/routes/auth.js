const { Router } = require('express');
const { check } = require('express-validator');
const {
  crearUsuario,
  loginUsuario,
  revalidar,
} = require('../controllers/auth');

// Usando el Router para crear rutas
const router = Router();

// Ruta Post para crear un nuevo usuario con sus middlewares y
// la referencia de su controller
router.post(
  '/new',
  [
    // Validando campos método recomendado
    check('name')
      .notEmpty()
      .withMessage('El nombre es obligatorio')
      .isLength({ min: 3 })
      .withMessage('El nombre debe de contener al menos 3 caracteres'),
    check('email')
      .notEmpty()
      .withMessage('El email es obligatorio')
      .isEmail()
      .withMessage('Email ingresado no es válido'),
    check('password')
      .notEmpty()
      .withMessage('La contraseña es obligatoria')
      .isLength({ min: 6 })
      .withMessage('La contraseña es mínimo de 6 caracteres'),
  ],
  crearUsuario
);

// Ruta Post para el login (vacío) con sus middlewares y
// la referencia de su controller
router.post(
  '',
  [
    // Validando campo email y password (express-validator) método 2
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
  ],
  loginUsuario
);

// Ruta para validar y revalidar token
router.get('/renew', revalidar);

// Exportando el router
module.exports = router;
