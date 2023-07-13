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
  query getVideos{
    getVideos{
      payload {
        title
        url
        tags
      }
      title
      tags
      type
    }
  }
`;

export const GATHER_RESULTS = gql`
query GetResults {
  getResults {
    payload {
      tags
      title
      url
      _id
    }
    tags
    title
    type
    _id
  }
}
`

export const SEARCH_RESULTS = gql`
query SearchResults($title: String!, $type: String!, $tags: [String]) {
  searchResults(title: $title, type: $type, tags: $tags) {
    _id
    payload {
      _id
      tags
      title
      url
      _id
    }
    tags
    title
    type
    _id
  }
}
`;

export const GATHER_PRODUCTS = gql`
query GetProducts {
  getProducts {
    _id
    name
    priceInCents
  }
}
`;
