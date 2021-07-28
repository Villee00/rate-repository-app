import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerName
          ownerAvatarUrl
          ownerName
          language
          description
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;