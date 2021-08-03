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
query {
  repositories {
    edges {
      node {
        ...RepositoryDetails
      }
    }
  }
}

${REPOSITORY_DETAILS}
`;

export const GET_AUTHORIZEDUSER = gql`
{
  authorizedUser {
    id
    username
  }
}
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!){
  repository(id: $id) {
    url
    reviews {
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
      }
    }

    ...RepositoryDetails
  }
}
${REPOSITORY_DETAILS}
`;