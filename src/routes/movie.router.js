import { Router } from "express";

import { getMovies, getMovieById } from "../controllers/movie.controller.js";

const router = Router();

// prefijo: /api/movies

router.get("/", getMovies);
router.get("/:id", getMovieById);

export default router;
