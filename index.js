import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import peliculasRoutes from "./src/routes/peliculas.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", peliculasRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión:", err));

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Servidor en puerto " + process.env.PORT);
});