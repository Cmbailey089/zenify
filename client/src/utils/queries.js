import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      profilePictureUrl
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      profilePictureUrl
    }
  }
`

export const QUERY_ME = gql`
query me{
  me{
    _id
    username
    email
    cart {
      count
      product {
        name
        priceInCents
      }
    }
  }
}
`

export const GATHER_VIDEOS = gql`
  query getVideos {
    getVideos {
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
  mutation updateProfilePicture($imageUrl: String!) {
    updateProfilePicture(imageUrl: $imageUrl) {
      _id
      username
      profilePictureUrl
    }
  }
`;