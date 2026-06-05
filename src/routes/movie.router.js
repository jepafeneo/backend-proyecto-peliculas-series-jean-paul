import { Router } from "express";

import {
  createMovie,
  getMovies,
  getMovieById,
} from "../controllers/movie.controller.js";

const router = Router();

// prefijo: /api/movies

router.post("/", createMovie);

router.get("/", getMovies);
router.get("/:id", getMovieById);

export default router;
