import { Router } from "express";
import Movie from "../models/Movie.js";

const router = Router();

// prefijo: /api/movies

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.json(movies);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al obtener las peliculas" });
  }
});

export default router;
