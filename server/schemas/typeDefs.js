// typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    getResults: [Result]
    searchResults(title: String!, type: String!, tags: [String]): [Result]
    getVideos: [Result]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addResult(title: String!, type: String!, payload: Video_Input!, tags: [String]): Result
    updateProfilePicture(imageUrl: String!): User
    deleteProfilePicture: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    profilePictureUrl: String
  }

  input Video_Input {
    _id: ID
    title: String!
    url: String!
    tags: [String]
  }

  type Video_Output {
    _id: ID
    title: String!
    url: String!
    tags: [String]
  }

  type Auth {
    token: String!
    user: User!
  }

  type Result {
    _id: ID!
    title: String!
    type: String!
    payload: Video_Output!
    tags: [String]
  }

  input Type {
    _id: ID
    name: String!
  }
`;

module.exports = typeDefs;



