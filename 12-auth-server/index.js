const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Manejando las rutas con middlewares (use)
// La ruta /api/auth se concatenará con la dirección en los routes
app.use('/api/auth', require('./routes/auth'));

// Escuchando en el puerto 4000
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`);
});
