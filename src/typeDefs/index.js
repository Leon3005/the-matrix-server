const { gql } = require("apollo-server");

const typeDefs = gql`
  type Media {
    Title: String!
    Year: String!
    imdbID: String!
    Type: String!
    Poster: String
  }
  type Query {
    matrix: [Media]
    matrixReloaded: [Media]
    matrixRevolutions: [Media]
  }
`;

module.exports = typeDefs;
