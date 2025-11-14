// app.js
const express = require('express');
require('dotenv').config();
const sequelize = require('./db/db');

const app = express();
app.use(express.json());

const rolesRoutes = require('./routes/roles.routes');
app.use('/', rolesRoutes);

const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/', usuariosRoutes);

const estudiantesRoutes = require('./routes/estudiantes.routes');
app.use('/', estudiantesRoutes);

const docentesRoutes = require('./routes/docentes.routes');
app.use('/api/docentes', docentesRoutes);

const carrerasRoutes = require('./routes/carreras.routes');
app.use('/', carrerasRoutes);

const cursosRoutes = require('./routes/cursos.routes');
app.use('/', cursosRoutes);


const seccionesRoutes = require('./routes/secciones.routes');
app.use('/', seccionesRoutes);

const asignacionRoutes = require('./routes/asignacion.routes');
app.use('/api/asignaciones', asignacionRoutes);

const matriculaRoutes = require('./routes/matricula.routes');
app.use('/api/matricula', matriculaRoutes);

const evaluacionesRoutes = require('./routes/evaluaciones.routes');
app.use('/', evaluacionesRoutes);

const calificacionesRoutes = require('./routes/calificaciones.routes');
app.use('/', calificacionesRoutes);

const asistenciasRoutes = require('./routes/asistencias.routes');
app.use('/', asistenciasRoutes);

const aulasRoutes = require('./routes/aulas.routes');
app.use('/', aulasRoutes);


const horariosRoutes = require('./routes/horarios.routes');
app.use('/', horariosRoutes);


const pagoRoutes = require('./routes/pago.routes');
app.use('/', pagoRoutes);

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
