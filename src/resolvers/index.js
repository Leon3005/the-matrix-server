const movies = require("./movies");

const resolvers = {
  Query: {
    movies,
  },
};

module.exports = resolvers;
