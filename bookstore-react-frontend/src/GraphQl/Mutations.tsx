import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($name: String!, $userId: Int!, $description: String!) {
    createBook(createBookInput: {
      name: $name,
      userId: $userId,
      description: $description
    }) {
      name
      id
    }
  }
`;

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($id: Int!, $name: String!, $userId: Int!, $description: String!) {
    updateBook(updateBookInput: {
      id: $id,
      name: $name,
      userId: $userId,
      description: $description
    }) {
      name
      id
    }
  }
`;


export const REMOVE_BOOK_MUTATION = gql`
  mutation RemoveBook($id: Int!) {
    removeBook(id: $id) {
      description
      name
    }
  }
`;
