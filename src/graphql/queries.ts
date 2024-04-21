/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listUsers = /* GraphQL */ `query ListUsers($limit: Int!, $nextToken: String) {
  listUsers(limit: $limit, nextToken: $nextToken) {
    username
    firstName
    lastName
    email
    phone
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
