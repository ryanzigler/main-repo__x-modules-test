const { gql } = require('apollo-server');

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track detail page"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture URL"
    photo: String
  }

  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
