const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Creando Petición GET
app.get('/', (req, res) => {
  console.log('Petición en el /');
  // Mandando una respuesta
  res.status(200).json({
    ok: true,
    mensaje: 'Todo bien',
    uuid: 1234,
  });
});

// Escuchando en el puerto 4000
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`);
});
