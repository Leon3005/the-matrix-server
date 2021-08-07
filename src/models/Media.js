const { Schema, model } = require("mongoose");

const schema = {
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
    unique: true,
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

const mediaShcema = new Schema(schema);

const Media = model("Media", mediaShcema);

module.exports = Media;
