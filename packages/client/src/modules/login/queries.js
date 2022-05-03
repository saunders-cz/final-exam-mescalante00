import { gql } from "@apollo/client";

export const GET_SESSION = gql`
  query GET_SESSION {
    session {
      user {
        firstName
        lastName
        email
        id
      }
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($input: CreateUserInput!) {
    addUser(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
      errors {
        message
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      success
      errors {
        message
      }
    }
  }
`;
