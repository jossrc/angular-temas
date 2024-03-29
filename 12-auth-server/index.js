const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
// Aplicando configuración de dotenv, para las variables de entorno
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// CORS 
app.use(cors());

// Lectura y parseo del body - permitir trabajar la request con json
app.use(express.json()); // -> implementar antes que las rutas 

// Manejando las rutas con middlewares (use)
// La ruta /api/auth se concatenará con la dirección en los routes
app.use('/api/auth', require('./routes/auth'));

// Directorio público
app.use(express.static('public'))

// Escuchando en el puerto 4000 y usando variables de entorno
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
