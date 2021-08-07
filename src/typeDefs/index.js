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
    movies: [Movie]
  }
`;

module.exports = typeDefs;
