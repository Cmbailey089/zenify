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