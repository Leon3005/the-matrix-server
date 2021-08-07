const axiosFetcher = require("../fetchers/axiosFetcher");

const matrixRevolutions = async (_, {}) => {
  const data = await axiosFetcher(
    `http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666`
  );

  console.log(data);

  return data;
};

module.exports = matrixRevolutions;
