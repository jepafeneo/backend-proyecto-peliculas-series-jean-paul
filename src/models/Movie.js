import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    genre: {
      type: String,
      require: true,
      trim: true,
    },
    year: {
      type: Number,
      require: true,
    },
    imagen: {
      type: String,
      require: true,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
