// TODO: Implement this file
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        getResults: [Result]
        searchResults(title: String!, type: String!, tags: [String]):[Result]
        getVideos: [Result]
        getProducts: [Product]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addResult(title: String!, type: String!, payload: Video_Input!, tags: [String]): Result
        deleteResult(_id: ID!): Result
        deleteUser(_id: ID!): User
        addToCart(product: Product_I!, count:Int!): User
        addProduct(name: String!, priceInCents: Int!): Product
        getCheckout(cart: [Item_Bundle_I]): String
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        cart: [Item_Bundle_O]
    }

    input Video_Input {
        _id: ID
        title: String!
       url:String!
       tags:[String]
    }

    input Product_I{
        _id: ID
        name: String!
        priceInCents: Int!
    }

    type Product{
        _id: ID
        name: String!
        priceInCents: Int!
    }

    input Item_Bundle_I{
        _id: ID
        product: Product_I!
        count: Int!
    }

    type Item_Bundle_O{
        _id: ID
        product: Product!
        count: Int!
    }

    type Video_Output {
        _id: ID
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
        payload: Video_Output!
        tags:[String]
    }
    input Type {
        _id: ID
        name: String!
    }
`
module.exports = typeDefs

