import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation CreateUser($username: String!, $password: String!){
  createUser(user: { username: $username, password: $password }) {
    id
    username
  }
}
`;

export const SIGNIN_USER = gql`
mutation Authorize($username: String!, $password: String!){
  authorize(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`;

export const CREATE_REVIEW = gql`
mutation CreateReview(
  $repositoryName: String!
  $ownerName: String!
  $rating: Int!
  $text: String
) {
  createReview(
    review: {
      repositoryName: $repositoryName
      ownerName: $ownerName
      rating: $rating
      text: $text
    }
  ) {
    repositoryId
  }
}
`;
