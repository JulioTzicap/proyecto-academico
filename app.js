// app.js
const express = require('express');
require('dotenv').config();
const sequelize = require('./db/db');

const app = express();
app.use(express.json());

// Conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((error) => {
    console.error(' Error al conectar con la base de datos:', error);
  });

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Servidor corriendo en el puerto ${PORT}`);
});
