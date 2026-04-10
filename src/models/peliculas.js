import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  anio_estreno: {
    type: Number,
    required: true
  },
  genero: {
    type: [String],
    required: true
  },
  duracion_minutos: {
    type: Number,
    required: true
  },
  calificacion_imdb: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Pelicula", peliculaSchema);