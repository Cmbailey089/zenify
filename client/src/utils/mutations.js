import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    // Mutation code...
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    // Mutation code...
  }
`;

export const ADD_RESULT = gql`
  mutation AddResult($title: String!, $type: String!, $payload: Video_Input!) {
    // Mutation code...
  }
`;

export const UPDATE_PROFILE_PICTURE = gql`
  mutation UpdateProfilePicture($imageUrl: String!) {
    // Mutation code...
  }
`;

export const DELETE_PROFILE_PICTURE = gql`
  mutation DeleteProfilePicture {
    // Mutation code...
  }
`;