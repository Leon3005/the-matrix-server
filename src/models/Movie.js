const { Schema, model } = require("mongoose");

const schema = {
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  poster: {
    type: Schema.Types.ObjectId,
    ref: "Poster",
  },
};

const movieSchema = new Schema(schema);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
