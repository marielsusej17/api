import express from "express";
import {
  crearPelicula,
  obtenerPeliculas,
  obtenerPelicula,
  actualizarPelicula,
  eliminarPelicula
} from "../controllers/peliculas.controller.js";

const router = express.Router();

router.post("/", crearPelicula);
router.get("/", obtenerPeliculas);
router.get("/:id", obtenerPelicula);
router.put("/:id", actualizarPelicula);
router.delete("/:id", eliminarPelicula);

export default router;