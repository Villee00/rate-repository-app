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
  $OrderBy:AllRepositoriesOrderBy!,
  $OrderDirection:OrderDirection!, 
  $SearchKeyword: String, 
  $First: Int,
  $After: String){
  repositories(orderBy:$OrderBy, orderDirection:$OrderDirection, searchKeyword:$SearchKeyword, first: $First, after: $After) {
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