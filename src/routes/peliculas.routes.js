import express from "express";
import {
  crearPelicula,
  obtenerPeliculas,
  obtenerPelicula,
  actualizarPelicula,
  eliminarPelicula
} from "../controllers/peliculas.controller.js";

const router = express.Router();

// 🔥 PRIMERO esta
router.get("/peliculas", obtenerPeliculas);

// 🔥 DESPUÉS esta
router.get("/peliculas/:id", obtenerPelicula);

router.post("/peliculas", crearPelicula);
router.put("/peliculas/:id", actualizarPelicula);
router.delete("/peliculas/:id", eliminarPelicula);

export default router;