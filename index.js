import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
connectDB();

import express from "express";

import movieRouter from "./src/routes/movie.router.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API de películas y series" });
});

app.use("/api/movies", movieRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
