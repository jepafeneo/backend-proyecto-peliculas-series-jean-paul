import { Router } from "express";

import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

const router = Router();

// prefijo: /api/movies

router.post("/", createMovie);

router.get("/", getMovies);
router.get("/:id", getMovieById);

router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
