import { gql } from "@apollo/client";

const REPOSITORY_DETAILS = gql`
fragment RepositoryDetails on Repository{
  id
  ownerName
  fullName
  ownerAvatarUrl
  ownerName
  language
  description
  stargazersCount
  forksCount
  reviewCount
  ratingAverage
}
`;
export const GET_REPOSITORIES = gql`
query(
  $orderBy:AllRepositoriesOrderBy!,
  $orderDirection:OrderDirection!, 
  $searchKeyword: String, 
  $first: Int,
  $after: String){
  repositories(
    orderBy:$orderBy, 
    orderDirection:$orderDirection, 
    searchKeyword:$searchKeyword, 
    first: $first, 
    after: $after) {
    edges {
      node {
        ...RepositoryDetails
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
${REPOSITORY_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
query getAuthorizedUser($includeReviews: Boolean = false) {
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          repository {
            fullName
            url
          }
          createdAt
          rating
          text
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;


export const GET_REPOSITORY = gql`
query Repository($id: ID!, $first: Int, $after: String){
  repository(id: $id) {
    url
    reviews(first:$first, after:$after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }

    ...RepositoryDetails
  }
}
${REPOSITORY_DETAILS}
`;
