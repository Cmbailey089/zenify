import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
      token
      user {
        _id
        email
        username
      }
    }
  }
  `;
    

    export const ADD_RESULT = gql`
mutation AddResult($title: String!, $type: String!, $payload: Video_Input!) {
  addResult(title: $title, type: $type, payload: $payload) {
    payload {
      tags
      title
      url
    }
    tags
    title
    type
  }
}
`;

export const DELETE_RESULT = gql`
mutation DeleteResult($id: ID!) {
  deleteResult(_id: $id) {
    _id
    payload {
      _id
      tags
      title
      url
    }
    tags
    title
    type
  }
}
`

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
    _id
    email
    username
  }
}
`
export const ADD_TO_CART = gql`
mutation AddToCart($items: Item_Bundle_I!) {
  addToCart(items: $items) {
    cart {
      count
      product {
        name
        priceInCents
      }
    }
    email
    username
  }
}
`
