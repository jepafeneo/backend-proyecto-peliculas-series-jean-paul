import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().select("-description -__v");

    res.json(movies);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al obtener las peliculas" });
  }
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }

    res.json(movie);
  } catch (error) {
    // console.log(error.message);

    res.status(500).json({ message: "Error al obtener la pelicula" });
  }
};
