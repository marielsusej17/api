import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import peliculasRoutes from "./routes/peliculas.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/peliculas", peliculasRoutes);

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Ruta prueba
app.get("/", (req, res) => {
  res.send("API de Películas funcionando 🎬");
});

// Puerto
const PORT = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log("🚀 Servidor en puerto " + PORT);
});