const { Schema, model } = require('mongoose');

// Crear Schema Usuario con mongoose
const UsuarioSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Exportar el modelo Usario usando el Schema
module.exports = model('Usuario', UsuarioSchema);
