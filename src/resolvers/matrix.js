const { Media, Poster } = require("../models");
const axiosFetcher = require("../fetchers/axiosFetcher");

const matrix = async (_, {}) => {
  const data = await axiosFetcher(
    `http://www.omdbapi.com/?s=Matrix&apikey=720c3666`
  );

  const dataToDb = data.map(async (media) => {
    try {
      if (media.Poster !== "N/A") {
        const poster = await Poster.create({ poster: media.Poster });

        const mediaToCreate = {
          title: media.Title,
          year: media.Year,
          imdbID: media.imdbID,
          type: media.Type,
          poster: poster._id,
        };

        await Media.create(mediaToCreate);
      } else {
        const mediaToCreate = {
          title: media.Title,
          year: media.Year,
          imdbID: media.imdbID,
          type: media.Type,
        };

        await Media.create(mediaToCreate);
      }
    } catch (err) {
      console.log("Failed to add record to DB. Record may already exist.");
    }
  });

  return data;
};

module.exports = matrix;
