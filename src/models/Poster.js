const { Schema, model } = require("mongoose");

const schema = {
  poster: {
    type: String,
    required: true,
  },
};

const posterSchema = new Schema(schema);

const Poster = model("Poster", posterSchema);

module.exports = Poster;
