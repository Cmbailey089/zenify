import { gql } from '@apollo/client';

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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        profilePictureUrl
      }
    }
  }
`;

export const ADD_RESULT = gql`
  mutation AddResult($title: String!, $type: String!, $payload: Video_Input!) {
    addResult(title: $title, type: $type, payload: $payload) {
      _id
      title
      payload {
        url
        tags
      }
      tags
      type
    }
  }
`;

export const UPDATE_PROFILE_PICTURE = gql`
  mutation UpdateProfilePicture($imageUrl: String!) {
    updateProfilePicture(imageUrl: $imageUrl) {
      _id
      username
      profilePictureUrl
    }
  }
`;

export const DELETE_PROFILE_PICTURE = gql`
  mutation DeleteProfilePicture {
    deleteProfilePicture {
      _id
      username
      profilePictureUrl
    }
  }
`;
