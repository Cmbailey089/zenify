// TODO: Implement this file
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Video {
        _id: ID!
        title: String!
        url: String!
    }

    type Auth {
        token: String!
        user: User!
    }
`
module.exports = typeDefs

