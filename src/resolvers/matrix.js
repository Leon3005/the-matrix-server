const axiosFetcher = require("../fetchers/axiosFetcher");

const matrix = async (_, {}) => {
  const data = await axiosFetcher(
    `http://www.omdbapi.com/?s=Matrix&apikey=720c3666`
  );

  console.log(data);

  return data;
};

module.exports = matrix;
