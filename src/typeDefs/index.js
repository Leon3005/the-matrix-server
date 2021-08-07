const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    Title: String!
    Year: String!
    imdbID: String!
    Type: String!
    Poster: String
  }
  type Query {
    matrix: [Movie]
    matrixReloaded: [Movie]
    matrixRevolutions: [Movie]
  }
`;

module.exports = typeDefs;
