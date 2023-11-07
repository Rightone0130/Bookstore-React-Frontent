import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      username
    }
  }
`;

export const LOAD_BOOKS = gql`
  query {
    books{
      id,
      name,
      userId,
      description
    }
  }
`;
