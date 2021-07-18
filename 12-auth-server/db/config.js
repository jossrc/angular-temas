const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect( process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Base de Datos Online');

  } catch (error) {
    console.log(error);
    // Evitar conectarnos a la BD si hay errores
    throw new Error('Error a la hora de inicializar la BD');
  }
}

module.exports = {
  dbConnection
}