// TODO: Implement this file
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        getResults: [Result]
        searchResults(title: String!, type: String!, tags: [String]):[Result]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addResult(title: String!, type: Type!, payload: Video!, tags: [String]): Result
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    input Video {
        _id: ID!
        title: String!
       url:String!
       tags:[String]
    }

    type Auth {
        token: String!
        user: User!
    }

    type Result {
        _id: ID!
        title: String!
        type: String!
        payload: String!
        tags:[String]
    }
    input Type {
        _id: ID!
        name: String!
    }
`
module.exports = typeDefs

