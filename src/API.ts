/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserInput = {
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
};

export type UsersPage = {
  __typename: "UsersPage",
  users?:  Array<User > | null,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  username: string,
  status: UserStatus,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
};

export type IUser = {
  __typename: "IUser",
  username: string,
  status: UserStatus,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
};

export enum UserStatus {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
}


export type AddUserMutationVariables = {
  user: UserInput,
};

export type AddUserMutation = {
  addUser?: string | null,
};

export type ListUsersQueryVariables = {
  limit: number,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "UsersPage",
    users?:  Array< {
      __typename: "User",
      username: string,
      status: UserStatus,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
    } > | null,
    nextToken?: string | null,
  },
};
