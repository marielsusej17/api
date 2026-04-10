import Pelicula from "../models/peliculas.js";

// Crear
export const crearPelicula = async (req, res) => {
  try {
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.status(201).json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas
export const obtenerPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una
export const obtenerPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
export const actualizarPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!pelicula) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }

    res.json(pelicula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
export const eliminarPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndDelete(req.params.id);

    if (!pelicula) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }

    res.json({ mensaje: "Película eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};