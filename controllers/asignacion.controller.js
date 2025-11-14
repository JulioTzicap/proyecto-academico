const Asignacion = require('../models/asignacion.model');

// Obtener todas las asignaciones
exports.getAll = async (req, res) => {
  try {
    const data = await Asignacion.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener asignación por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) {
      return res.status(404).json({ mensaje: "Asignación no encontrada" });
    }
    res.json(asignacion);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// Crear asignación
exports.create = async (req, res) => {
  try {
    const nuevaAsignacion = await Asignacion.create(req.body);
    res.json(nuevaAsignacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar asignación
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    await Asignacion.update(req.body, { where: { id } });
    res.json({ message: "Asignación actualizada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Asignacion.destroy({ where: { id } });
    res.json({ message: "Asignación eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
