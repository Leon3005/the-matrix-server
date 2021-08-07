const axiosFetcher = require("../fetchers/axiosFetcher");

const matrixReloaded = async (_, {}) => {
  const data = await axiosFetcher(
    `http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666`
  );

  console.log(data);

  return data;
};

module.exports = matrixReloaded;
