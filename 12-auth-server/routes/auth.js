const { Router } = require('express');

// Usando el Router para crear rutas
const router = Router();

// Ruta Post para crear un nuevo usuario
router.post('/new', (req, res) => {
  return res.json({
    ok: true,
    msg: 'Crear usuario /new',
  });
});

// Ruta para el login (vacío)
router.post('', (req, res) => {
  return res.json({
    ok: true,
    msg: 'Login de usuario /',
  });
});

// Ruta para validar y revalidar token
router.get('/renew', (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew',
  });
});

// Exportando el router
module.exports = router;
