const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidar } = require('../controllers/auth');

// Usando el Router para crear rutas
const router = Router();

// Ruta Post para crear un nuevo usuario con la referencia de su controller
router.post('/new', crearUsuario);

// Ruta Post para el login (vacío) con la referencia de su controller
router.post('', loginUsuario);

// Ruta para validar y revalidar token
router.get('/renew', revalidar );

// Exportando el router
module.exports = router;
