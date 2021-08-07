const matrix = require("./matrix");
const matrixReloaded = require("./matrixReloaded");
const matrixRevolutions = require("./matrixRevolutions");

const resolvers = {
  Query: {
    matrix,
    matrixReloaded,
    matrixRevolutions,
  },
};

module.exports = resolvers;
