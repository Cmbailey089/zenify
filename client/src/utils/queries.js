import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
    }
  }
`

export const QUERY_VIDEOS = gql`
  query videos {
    videos {
      _id
      title
      url
    }
  }
`;
